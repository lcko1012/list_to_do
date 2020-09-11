import React, { Component } from "react";

export class Bar extends Component {
  render() {
    var { items, count, Sort } = this.props;
    return (
      <div className="flex flex-row mt-3 text-center relative ">
        <span>{count} item left</span>
        <ul className="absolute right-0 left-0">
          <li
            className={
              Sort === -1
                ? "border-solid border border-gray-500 inline-block ml-4 cursor-pointer"
                : "inline-block ml-4 cursor-pointer"
            }
            onClick={() => this.props.onSort(-1)}
          >
            All
          </li>
          <li
            className={
              Sort === 0
                ? "border-solid border border-gray-500 inline-block ml-4 cursor-pointer"
                : "inline-block ml-4 cursor-pointer"
            }
            onClick={() => this.props.onSort(0)}
          >
            Active
          </li>
          <li
            className={
              Sort === 1
                ? "border-solid border border-gray-500 inline-block ml-4 cursor-pointer"
                : "inline-block ml-4 cursor-pointer"
            }
            onClick={() => this.props.onSort(1)}
          >
            Completed
          </li>
        </ul>
        {count < items.length ? (
          <span
            className="absolute right-0 hover:underline cursor-pointer "
            onClick={this.props.onClearCompleted}
          >
            Clear completed
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Bar;
