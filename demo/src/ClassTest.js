import React, { Component } from 'react';
import './style.css'

class ClassTest extends Component {
    state = {
        value: 'Arun',
        count:0
    }
    handleClick() {
        console.log('Hello ' + this.state.count + ' thanks for visiting');

        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        console.log("Mounted");
        this.setState({count: this.state.count+1})
    }
    render() {
        return (
            <>
                <p>Value : {this.state.value}</p>
                <ul>
                    <li>Ferrari</li>
                    <li>Lamborgini</li>
                    <li>Swift</li>
                </ul>
                <button onClick={() => this.handleClick()} style={{ color: 'green', backgroundColor: 'White', borderColor: 'yellow' }}>Add One</button><h1>{this.state.count}</h1>
                <button onClick={() => {this.setState({count: this.state.count - 1})}} className="btn">Remove One</button>
            </>
        );
    }
}

export default ClassTest;
