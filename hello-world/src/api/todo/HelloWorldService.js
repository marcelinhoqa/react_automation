import Axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        return Axios.get('http://localhost:8080/hello-world')
        //console.log('execute service')
    }

}

export default new HelloWorldService