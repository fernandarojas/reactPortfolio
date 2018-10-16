import React from "react";
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = { 
  bottomNav: { 
    width: '100%', 
    position: 'fixed', 
    bottom: 0, 
    height: 100,
    'background-color': '#9c7348',
  }, 

  bottomNavLabels: { 
    'color': '#f6f1e8',
  }
}

class Footer extends React.Component { 

  render() { 

    const { classes } = this.props;

    return (
      <Grid container className={classes.navGrid}> 
        <Grid item>
          <BottomNavigation
            showLabels
            className={classes.bottomNav}
          >
            <BottomNavigationAction className={classes.bottomNavLabels}
              label="Instagram" 
            />
            <BottomNavigationAction className={classes.bottomNavLabels}
              label="Github" 
            />
            <BottomNavigationAction className={classes.bottomNavLabels}
              label="LinkedIn" 
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer);