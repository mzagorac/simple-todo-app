import React, { Component } from "react";
import { Route } from "react-router-dom";

import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import Details from "./components/Details";
import CircularProgress from "@material-ui/core/CircularProgress";
import SimpleAppBar from "./components/SimpleAppBar";
import "./App.css";

import * as config from "./config/config";
import { getAll, create, remove, edit } from "./lib/libs";

class App extends Component {
  state = {
    tasks: [],
    status: "",
    loading: true
  };

  componentDidMount() {
    // Simulate latency
    setTimeout(() => {
      getAll(config.url).then(data => {
        this.setState({ tasks: data, loading: !this.state.loading });
      });
    }, 1000);
  }

  createTask = async data => {
    if (!data.text || data.text.trim() === "") return;
    const task = await create(config.url, data);
    this.setState(({ tasks }) => ({
      tasks: [...tasks, task]
    }));
  };

  deleteTask = async id => {
    await remove(config.url, id);
    const newTasks = [...this.state.tasks].filter(task => task._id !== id);
    this.setState({
      tasks: newTasks
    });
  };

  toggleComplete = task => {
    edit(config.url, { ...task, completed: !task.completed });
    const newTasks = [...this.state.tasks].map(t => {
      if (task._id === t._id) t.completed = !t.completed;
      return t;
    });
    this.setState({ tasks: newTasks });
  };

  handleChange = e => {
    this.setState({ status: e.target.value });
  };

  toggleActive = () => {
    return this.state.status === "Active"
      ? [...this.state.tasks].filter(task => !task.completed)
      : [...this.state.tasks].filter(task => task.completed);
  };

  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <div className="wrapper">
          <Route
            exact
            path="/"
            render={() => {
              return this.state.loading ? (
                <CircularProgress size={60} thickness={5} />
              ) : (
                <TasksList
                  status={this.state.status}
                  tasks={
                    !this.state.status ? this.state.tasks : this.toggleActive()
                  }
                  deleteTask={this.deleteTask}
                  toggleComplete={this.toggleComplete}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={({ history }) => {
              return (
                <AddTask
                  onCreateTask={task => {
                    this.createTask(task);
                    history.push("/");
                  }}
                />
              );
            }}
          />
          <Route path="/details" component={Details} />
        </div>
      </div>
    );
  }
}

export default App;
