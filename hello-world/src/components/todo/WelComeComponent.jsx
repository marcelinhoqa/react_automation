import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
class WelComeComponent extends Component{

    render(){
        return <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name}. You can manage you todos <Link to="/todos">here</Link>
                </div>
                  
                </>
    }
}

export default WelComeComponent