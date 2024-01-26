import { Component } from "react";

export class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange(value) {
    this.setState({ item: value });
  }
  addItem() {
    this.setState((prev) => ({
      list: [prev.item, ...prev.list],
      item: "",
    }))
  }
  render() {
    return (
      <>
        <p>Todo List</p>
        <input
          type="text"
          onChange={(event) => this.handleChange(event.target.value)}
        ></input>
        <button onClick={() => this.addItem()}>Add</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
