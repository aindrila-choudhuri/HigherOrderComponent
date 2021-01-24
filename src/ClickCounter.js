import React, {Component} from 'react';
import UpdatedComponent from "./HOC";

class ClickCounter extends Component {
    render(){
        const {count, incrementCounter} = this.props; 
        return(
            <button onClick={incrementCounter}>Clicked {count} times</button>
        )
    }
}

export default UpdatedComponent(ClickCounter);