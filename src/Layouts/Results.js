import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: 25
  },
  paper: {
    padding: 25,
    textAlign: "center"
  },
  grid: {
    marginTop: 25,
    marginBottom: 25
  }
});

const Results = props => {
  const { classes } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={0}
      className={classes.root}
    >
      <Grid item xs={12} className={classes.grid}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">Result 1</Typography>
          <br />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
            lacus massa. Praesent faucibus, velit sed egestas ultrices, ex diam
            tempor felis, non placerat risus erat luctus odio. Praesent ut
            commodo erat.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">Result 2</Typography>
          <br />
          <Typography variant="body1">
            Etiam fermentum luctus augue nec mollis. Nam congue ante vitae
            facilisis efficitur. Nam tincidunt eu nisi at egestas. Vestibulum
            convallis dignissim dui non pretium
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">Result 3</Typography>
          <br />
          <Typography variant="body1">
            Quisque sed felis ac libero facilisis porttitor ut sed leo. Sed et
            cursus ante. Nunc rutrum eros nibh, quis posuere odio malesuada ac.
            Cras a tortor at mauris ornare mollis. Mauris at est aliquam,
            dignissim neque sit amet, pretium quam.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
