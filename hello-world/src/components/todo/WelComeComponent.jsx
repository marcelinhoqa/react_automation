import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelComeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        }
        // this.handleSucessfullResponse = this.handleSucessfullResponse.bind(this)
        // se for arrow function nao precisa fazer isso
    }

    render(){
        return <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name}. You can manage you todos <Link to="/todos">here</Link>
                </div>
                  
                <div className="container">
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>

                <div className="container">
                {this.state.welcomeMessage}
                </div>

                </>
    }

    retrieveWelcomeMessage(){
       HelloWorldService.executeHelloWorldService()
       .then(response => this.handleSucessfullResponse(response))
    
       ;
    }
    handleSucessfullResponse = (response) =>  {
        this.setState({welcomeMessage: response.data})
    }

}

export default WelComeComponent