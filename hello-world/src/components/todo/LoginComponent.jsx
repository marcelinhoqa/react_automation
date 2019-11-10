import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password:''
        }
       // this.handleUserNameChange = this.handleUserNameChange.bind(this)
       // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // handleUserNameChange(event){
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }
   
    handleChange(event){
        console.log(event.target.value)
        this.setState({
           [event.target.name]:event.target.value
        })
    }

    loginClicked(){
        if(this.state.username === 'marcelo' && this.state.password === 'teste'){
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`)
        this.setState({showSucessMessage:true})
        this.setState({hasLoginFailed:false})
        }
        else{
            this.setState({showSucessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        // console.log(this.state)
    }

    render(){
        return (
 
  <div className="container">
      <h1>Login</h1>
        <div >
            {/*<ShowInvalidCredentials hasLoginFailed ={this.state.hasLoginFailed && <div>Invalid Credentialsss</div>} />*/}
            {/* <ShowLoginSucess showSucessMessage ={this.state.showSucessMessage} />*/}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentialsss</div>} 
            {this.state.showSucessMessage && <div>Login Sucessful</div>}
       
           User Name: <input type="text" name="username" value= {this.state.username} onChange= {this.handleChange}/>
           Password: <input type="password" name="password" value= {this.state.password} onChange = {this.handleChange}/>
           <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
  </div>
        )
    }
}
export default LoginComponent