import path from 'path';
import File from '../models/File.js'
import ApiError from "../exeptions/ApiError.js";
import FileDto from "../dtos/FileDto.js";
import db, {UpdateOrCreate} from "../db.js";
import * as fs from "fs";

class FileService {
    static #dir = path.resolve('./uploads');

    static #CreateDir(userId) {
        if (!fs.existsSync(this.#dir)){
            fs.mkdirSync(this.#dir);
        }
        if (!fs.existsSync(this.#dir + `\\${userId}`)){
            fs.mkdirSync(this.#dir + `\\${userId}`);
        }
    }

    static #MakeFileInfo(file) {
        const { size, mimetype } = file;
        const name = file.name.substring(file.name.length - 40);
        const uploadDate = new Date().toUTCString();
        const splitName = name.split('.')
        const extension = splitName[splitName.length - 1];
        return { name, size, mimetype, uploadDate, extension };
    }

    static async #SaveFile(file, name, userId) {
        const uploadPath = this.#dir + `\\${userId}\\` + name;
        await file.mv(uploadPath).catch((e) => {
            throw ApiError.Internal(`Ошибка при загрузке файла ${file.name}`);
        });
    }

    static async #CheckAccess(userId, fileId) {
        const file = await File.findOne({
            where: { id: fileId },
        });
        if(!file) throw ApiError.BadRequest('Файла не существует',
            [{value: fileId, msg: 'does not exist', param: 'id', location: 'param'}]);
        if(file.userId !== userId) throw ApiError.Forbidden('Нет доступа к файлу');
        return file;
    }

    static async Save(files, userId) {
        const added = [];
        if(!Array.isArray(files)) files = [files];
        this.#CreateDir(userId);
        await db.transaction(async () => {
            for (const file of files) {
                const { name, size, mimetype, uploadDate, extension } = this.#MakeFileInfo(file)
                await this.#SaveFile(file, name, userId);
                const uploaded = await UpdateOrCreate(File, {name: name}, {
                    name: name,
                    extension: extension,
                    mimeType: mimetype,
                    size: size,
                    uploadDate: uploadDate,
                    userId: userId})
                added.push(new FileDto(uploaded));
            }
        });
        return added;
    }

    static async GetAll(userId, page, list_size) {
        return (await File.findAll({
            where: {userId: userId},
            offset: (page > 1 ? page - 1 : 0) * list_size,
            limit: list_size,
            order: [['id', 'ASC']]
        })).map(x => new FileDto(x));
    }

    static async GetById(userId, id) {
        const file = await this.#CheckAccess(userId, id);
        return new FileDto(file);
    }

    static async Delete(userId, id) {
        const file = await this.#CheckAccess(userId, id);
        await fs.unlink(`${this.#dir}\\${userId}\\${file.name}`, (e) => {});
        await file.destroy();
        return true;
    }

    static async GetPath(userId, id) {
        const file = await this.#CheckAccess(userId, id);
        return `${this.#dir}\\${userId}\\${file.name}`;
    }

    static async Update(file, userId, id) {
        if(Array.isArray(file)) throw ApiError.BadRequest('Получено больше 1 файла',
            [{value: '', msg: 'too many files', param: 'files', location: 'body'}]);

        const oldFile = await this.#CheckAccess(userId, id);
        const { name, size, mimetype, uploadDate, extension } = this.#MakeFileInfo(file)
        if(oldFile.name !== name) {
            const candidate = await File.findOne({
                where: { name: name, userId: userId },
            });
            if(candidate) throw ApiError.BadRequest(`Файл с именем ${name} уже существует, вы пытались обновить ${oldFile.name}`,
            [{value: '', msg: 'name taken', param: 'files', location: 'body'}]);
            await fs.unlink(`${this.#dir}\\${userId}\\${oldFile.name}`, (e) => {});
        }
        await this.#SaveFile(file, name, userId);
        oldFile.name = name;
        oldFile.size = size;
        oldFile.mimetype = mimetype;
        oldFile.uploadDate = uploadDate;
        oldFile.extension = extension;
        await oldFile.save();
        return new FileDto(oldFile);
    }
}

export default FileService;