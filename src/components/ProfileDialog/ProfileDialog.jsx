import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useProfileDialogStyles } from './ProfileDialog.styles';
import UploadButton from '../UploadButton/UploadButton';
const mockUserData = require('../../utils/MockUserData.json');

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfileDialog({ data, open, handleClose }) {
  const classes = useProfileDialogStyles();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="profile-dialog-title"
        aria-describedby="profile-dialog-description"
      >
        <DialogTitle id="profile-dialog-title">
          {'Your profile'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="profile-dialog-description">
            Customize your profile here
          </DialogContentText>
          <Divider className={classes.divider} />
          <div>
            <Avatar id="profile-avatar" className={classes.avatar}>
              {data[0].firstName[0]}
              {data[0].lastName[0]}
            </Avatar>
            <UploadButton />
          </div>
          <Divider className={classes.divider} />
          <Typography id="name" variant="h6">
            Name: {data[0].firstName} {data[0].lastName}
          </Typography>
          <Typography id="email" variant="h6">
            Email: {data[0].email}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
