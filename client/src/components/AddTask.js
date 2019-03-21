import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import serialize from "form-serialize";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";

class AddTask extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = serialize(e.target, { hash: true });
    if (this.props.onCreateTask) this.props.onCreateTask(data);
  };

  render() {
    return (
      <div>
        <Link to="/">
          <Button variant="contained" size="large" type="submit">
            <NavigateBefore />
          </Button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-full-width"
            name="text"
            autoComplete="off"
            label="Task"
            style={{ margin: 8 }}
            placeholder="Enter new task"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          {/*<input type="text" name="text" autoComplete="off" />*/}
          <Button variant="contained" size="large" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTask;
