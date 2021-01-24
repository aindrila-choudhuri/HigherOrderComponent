import React, {Component} from 'react';
import UpdatedComponent from "./HOC";

class HoverCounter extends Component {
    render(){
        const {count, incrementCounter} = this.props; 
        return(
            <div>
                <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);