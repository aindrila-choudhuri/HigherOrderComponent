import React, {Component} from "react";

const UpdatedComponent = (WrappedComponent) => {
    class NewComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
        }
    
        incrementCounter = () => {
            this.setState(prevState => {
                return {count : prevState.count +1}
            })
        }

        render(){
            return(
                <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent;