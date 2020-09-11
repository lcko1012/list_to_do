import React, { Component } from "react";


export class InputItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      "id": "",
      "name": "",
      "status" : false
    }
  }
  
  onChange = (event) => {
   
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })

  }

  onKeyUp = (event) => {
    var enter = event.keyCode;
    if(enter === 13){
      this.props.onAddItem(this.state)
      //Xoa input sau khi nhan
      this.setState({
        "name": ""
      })
    }
  }

  render() {
    return (
      <div className="border-b">
        <i
          className="fas fa-angle-down fa-2x  ml-1 mr-5 cursor-pointer"
          onClick={this.props.onCompleteAll}
        />
        <input
          className="outline-none font-mono text-xl"
          onChange={this.onChange}
          name="name"
          value={this.state.name}
          onKeyUp={this.onKeyUp}
          style={{ width: "500px", height: "40px" }}
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
  

}

export default InputItem;
