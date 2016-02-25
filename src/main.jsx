import React, { Component } from "react";
import ReactDOM from "react-dom";
import CheckboxWithLabel from './components/CheckboxWithLabel';

class App extends Component {
    render(){
        return (
            <div>
                <CheckboxWithLabel />
            </div>
        )
    }
}

const mountNode = document.getElementById("app");

ReactDOM.render(
  <App />,
  mountNode
);