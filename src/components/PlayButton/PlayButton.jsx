import React from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
} from '@material-ui/core';
import { usePlayButtonStyles } from './PlayButton.styles';

export default function PlayButton() {
  const [nickname, updateNickname] = React.useState('');

  const classes = usePlayButtonStyles();

  const onNicknameChange = (event) => {
    updateNickname(event.target.value);
  };

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <div className={classes.flexbox}>
          <TextField
            error={nickname.length < 5}
            id="nickname-text-field"
            label="Nickname"
            helperText="Nickname has to be 5 characters or more"
            variant="outlined"
            value={nickname}
            onChange={onNicknameChange}
          />
          <Button
            id="play-blackjack-button"
            className={classes.button}
            disabled={nickname.length < 5}
            variant="contained"
          >
            PLAY BLACKJACK
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
