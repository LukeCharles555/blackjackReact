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
import ProfileDialog from '../ProfileDialog/ProfileDialog';
const mockUserData = require('../../utils/MockUserData.json');

export default function BottomNavigation() {
  const [open, setOpen] = React.useState(false);

  const classes = useNavigationStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <ProfileDialog
          data={mockUserData.users}
          open={open}
          handleClose={handleClose}
        />
      ) : (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                id="home-button"
                aria-label="open drawer"
                href="/"
              >
                <HomeIcon />
              </IconButton>
              <Fab
                onClick={handleClickOpen}
                id="avatar-button"
                className={classes.fabButton}
              >
                <Avatar className={classes.avatar} />
              </Fab>
              <div className={classes.grow} />
              <IconButton
                id="game-button"
                color="inherit"
                href="/game"
              >
                <SportsEsportsIcon />
              </IconButton>
              <IconButton
                id="settings-button"
                edge="end"
                color="inherit"
                href="/settings"
              >
                <SettingsIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
    </div>
  );
}
