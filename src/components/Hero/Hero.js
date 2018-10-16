import React from "react";
import {Typography, Grid, Card, CardContent, Button, CardActions} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
    margin: '0 auto',
    height: 320
  }, 

  card: { 
    minWidth: 275, 
    marginRight: 10,
    marginTop: 30
  },

  title: { 
    fontSize: 30, 
    marginBottom: 10
  }, 

  description: { 
    fontSize: 22, 
    marginBottom: 20
  },

  languages: { 
    fontSize: 20
  },

  button: { 
    'background-color': '#d2b81a'
  }

  
};

class Hero extends React.Component { 

  render() { 

    const { classes } = this.props;

    return (
      <div className={classes.mainDiv}>
        <Grid
          container 
          spacing={12} 
          justify="center" 
          style={styles.root}
        >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>
                  Froogle
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                  Search Engine for Product Price Comparison between eBay and Walmart.
                </Typography>
                <Typography className={classes.languages}>
                  Javascript, HTML, CSS, Bootstrap
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} 
                  variant="outlined" 
                  fullWidth={true} 
                  size="medium"
                  href="https://fernandarojas.github.io/Froogle/"
                >
                  Project Link
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>
                  WatchIndex
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                  Movie and TV Show Search Engine for those nights you don't know what to watch. </Typography>
                <Typography className={classes.languages}>
                  MongoDB, NodeJS, Javascript, Bootstrap
                </Typography>
              </CardContent>
              <CardActions>
               <Button className={classes.button} 
                  variant="outlined" 
                  fullWidth={true} 
                  size="medium"
                  href="https://github.com/fernandarojas/TriviaGame"
                >
                  Project Link
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>
                  Trivia Game
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                 Interactive Web App Multiple Choice Technology Trivia Game </Typography>
                <Typography className={classes.languages}>
                  Javascript, HTML, CSS, Bootstrap
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} 
                  variant="outlined" 
                  fullWidth={true} 
                  size="medium"
                  href="https://intense-anchorage-72666.herokuapp.com/"
                >
                  Project Link
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Hero);