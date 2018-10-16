import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = { 
  AppBar: { 
    'background-color': '#e1902b', 
    width: '100%', 
    position: 'sticky', 
    top: 0,
    right: 0,
    left: 0,
    height: 80
  }
}
class Header extends React.Component { 

  render() { 

    return (
      <div>
        <AppBar style={styles.AppBar} position="static" color="default">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Fernanda Rojas
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header);