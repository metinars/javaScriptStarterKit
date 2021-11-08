export default class UserService{
    constructor(){
        this.users = []
        this.loggerService = loggerService
    }


    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }


    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id ===id)
    }
}