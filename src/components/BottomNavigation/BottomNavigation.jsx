import React from 'react';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Fab,
  IconButton,
  Avatar,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import HomeIcon from '@material-ui/icons/Home';
import { useNavigationStyles } from './BottomNavigation.styles';

export default function BottomNavigation() {
  const classes = useNavigationStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            href="/home"
          >
            <HomeIcon />
          </IconButton>
          <Fab aria-label="add" className={classes.fabButton}>
            <Avatar className={classes.avatar} />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit" href="/game">
            <SportsEsportsIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" href="/settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
