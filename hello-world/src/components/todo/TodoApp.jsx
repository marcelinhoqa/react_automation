import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelComeComponent from './WelComeComponent.jsx'

class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component ={LoginComponent} />
                    <Route path="/login" component ={LoginComponent} />
                    <AuthenticatedRoute path="/welcome/:name" component ={WelComeComponent} />
                    <AuthenticatedRoute path="/todos" component ={ListTodosComponent } />
                    <AuthenticatedRoute path="/logout" component ={LogoutComponent } />
                    <Route component ={ErrorComponent} />
                    </Switch>
                <FooterComponent />
                    </>
                </Router>

            </div>
        )
    }

}


function ErrorComponent(){
    return <div> An Error Ocurred. I don't know what to do! Contat Support  </div>
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div> Invalid Credentials</div>
    }
    return null
}

function ShowLoginSucess(props){
    if(props.showSucessMessage){
        return <div> Login Sucessful</div>
    }
    return null
}


export default TodoApp