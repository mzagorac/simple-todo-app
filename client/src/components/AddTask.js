import React, { Component } from "react";
import serialize from "form-serialize";

class AddTask extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = serialize(e.target, { hash: true });
    if (this.props.onCreateTask) this.props.onCreateTask(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" autoComplete="off" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
