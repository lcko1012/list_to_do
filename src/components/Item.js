import React, { Component } from "react";

export class Item extends Component {
  render() {
    var {item} = this.props;
    return (
      <div className="relative mt-3">
        <i
          className={
            item.status
              ? "far fa-check-circle fa-2x cursor-pointer"
              : "far fa-circle fa-2x cursor-pointer"
          }
          onClick={() => this.onCompleteItem(item.id)}
        ></i>
        <label
          className={
            item.status
              ? "ml-3 line-through font-mono text-lg text-gray-500 delay-100 duration-75"
              : "ml-3 font-mono text-lg delay-100 duration-75"
          }
          onClick={() => this.onCompleteItem(item.id)}
        >
          {item.name}
        </label>
        <i
          className="fas fa-times-circle cancel absolute right-0 cursor-pointer"
          style={{ top: 10 }}
          onClick={() => this.onDelteItem(item.id)}
        ></i>
      </div>
    );
  }

  onDelteItem = (id) => {
    this.props.onDeleteItem(id)
  } 
  onCompleteItem = (id) => {
    this.props.onCompleteItem(id)
  }
}

export default Item;
