import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

import { Link, Route } from "react-router-dom";

import Details from "./Details";
import Filter from "./Filter";

class TasksList extends Component {
  onDeleteTask = id => {
    if (this.props.deleteTask) this.props.deleteTask(id);
  };

  onEditTask = task => {
    if (this.props.toggleComplete) this.props.toggleComplete(task);
  };

  render() {
    return (
      <div>
        <Filter
          handleChange={this.props.handleChange}
          status={this.props.status}
        />
        <List>
          {this.props.tasks.map(task => (
            <div key={task._id} style={{ display: "flex" }}>
              <Checkbox
                checked={task.completed}
                onClick={() => this.onEditTask(task)}
              />
              <ListItem>
                <Link
                  to={{
                    pathname: "/details",
                    state: { task }
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText primary={task.text} />
                </Link>
              </ListItem>
              <IconButton
                aria-label="Delete"
                color="primary"
                onClick={() => this.onDeleteTask(task._id)}
              >
                <DeleteIcon />
              </IconButton>
              <Route path="/details" render={() => <Details task={task} />} />
            </div>
          ))}
        </List>
        <Link to="/add">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    );
  }
}

export default TasksList;
