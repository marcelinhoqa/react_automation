import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
class TodoApp extends Component {
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <>
                    <Switch>
                    <Route path="/" exact component ={LoginComponent} />
                    <Route path="/logins" component ={LoginComponent} />
                    <Route path="/welcome/:name" component ={WelComeComponent} />
                    <Route path="/todos" component ={ListTodosComponent } />
                    <Route component ={ErrorComponent} />
                    </Switch>
                
                    </>
                </Router>

            </div>
        )
    }

}

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
        todos:[
             {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
             {id: 2, description: 'Become   an Expert', done:false, targetDate: new Date()},
             {id: 3, description: 'Visit India', done:false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return <div> 
                    <h1>List Todos</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>done</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todos.map(
                                 todo => 
                                 <tr>
                                      <td>{todo.id}</td>
                                      <td>{todo.description}</td>
                                      <td>{todo.done.toString()}</td>
                                      <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
              </div>
    }
}

class WelComeComponent extends Component{

    render(){
        return <div>
                     Welcome {this.props.match.params.name}. You can manage you todos <Link to="/todos">here</Link>
                </div>
    }
}

function ErrorComponent(){
    return <div> An Error Ocurred. I don't know what to do! Contat Support  </div>
}

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
        this.props.history.push(`/welcome${this.state.username}`)
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
  
        <div >
      <ShowInvalidCredentials hasLoginFailed ={this.state.hasLoginFailed} />
      <ShowLoginSucess showSucessMessage ={this.state.showSucessMessage} />
       
           User Name: <input type="text" name="username" value= {this.state.username} onChange= {this.handleChange}/>
           Password: <input type="password" name="password" value= {this.state.password} onChange = {this.handleChange}/>
           <button onClick={this.loginClicked}>Login</button>
        </div>
        )
    }
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