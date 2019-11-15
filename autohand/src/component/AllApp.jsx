import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {BrowserRouter as Link} from 'react-router-dom'
import UserService from '../api/UserService.js'
import Header from '../component/Header.jsx'
class AllApp extends Component {

    constructor(props){
        super(props)
        this.executeService = this.executeService.bind(this)
        this.state = {
            todos: [

            ]
        }
        // this.handleSucessfullResponse = this.handleSucessfullResponse.bind(this)
        // se for arrow function nao precisa fazer isso
    }



    render(){
        return <>
                <Header />
                <div className="container">
               
                {this.executeService()}
                </div>

            <div className="container">
   
                </div>
                <table>
                    <thead>
                     <tr>
                         <td>Email</td>
                         <td>Nome</td>
                     </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.todos.map(
                                 (todo, index) => 
                                 <tr key={index}>
                                      <td>{todo.nome}</td>
                                      <td>{todo.email}</td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </>
    }

    executeService(){
        UserService.executeUserService()
        .then(response => this.handleSucessfullResponse(response))
        ;
    }

    handleSucessfullResponse = (response) =>  {
        this.setState({todos: response.data})
    }


}
export default AllApp