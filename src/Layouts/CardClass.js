import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: 50,
    textAlign: "center"
  },
  card: {
    maxWidth: 500
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class CardClass extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} raised="true">
        <CardHeader title={this.props.name} subheader={this.props.subheader} />
        <CardContent>
          <Typography variant="body">{this.props.content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{this.props.subcontent}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CardClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardClass);
