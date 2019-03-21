import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Details extends Component {
  render() {
    const { text, completed, createdAt } = this.props.location.state.task;
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Task:
          </Typography>
          <Typography variant="h5" component="h2">
            {text}
          </Typography>
          <Typography color="textSecondary">
            Task is {completed ? "" : "not"} completed
          </Typography>
          <Typography component="p">Started at {createdAt}</Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button size="small" variant="contained">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
