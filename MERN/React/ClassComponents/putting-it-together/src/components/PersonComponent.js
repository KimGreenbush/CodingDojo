import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: this.props.age }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.getOlder }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }

    getOlder = () => {
        let age = this.state.age;
        console.log(age);
        age++;
        this.setState({age: age});
    }
}

export default PersonCard;