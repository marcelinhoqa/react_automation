import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'



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
                <div className="container">
                    <h1>List Todos</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>done</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todos.map(
                                 todo => 
                                 <tr key={todo.id}>
                                      <td>{todo.description}</td>
                                      <td>{todo.done.toString()}</td>
                                      <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
              </div>
    }
}

export default ListTodosComponent