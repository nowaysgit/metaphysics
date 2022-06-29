class UserDto {
    id;
    login;

    constructor(model) {
        this.id = model.id || model._id;
        this.login = model.login;
    }
}

export default UserDto