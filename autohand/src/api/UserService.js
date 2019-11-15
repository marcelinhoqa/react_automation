import Axios from "axios"

class UserService{

    executeUserService(){
        return Axios.get('http://localhost:3000/Usuario')
        //console.log('execute service')
    }

}

export default new UserService