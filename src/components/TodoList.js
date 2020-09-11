import React, { Component } from "react";
import ContainerInput  from "../containers/ContainerInput";
import ContainerBar from "../containers/ContainerBar";
import  "../styles/listtodo.css";

export class TodoList extends Component {
  render() {
    return (
      <div className="flex flex-col p-5 listtodo border-solid border">
        <ContainerInput />
        {this.props.children}
        <ContainerBar />
      </div>
    );
  }
}

export default TodoList;
