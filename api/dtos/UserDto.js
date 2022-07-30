class UserDto {
  email
  access
  accessDate
  admin

  constructor (model) {
    this.email = model.email
    this.access = model.access || false
    this.accessDate = model.accessDate
    this.admin = model.admin
  }
}

export default UserDto
