import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';

const YellowSwitch = withStyles({
  switchBase: {
    color: yellow[300],
    '&$checked': {
      color: yellow[500],
    },
    '&$checked + $track': {
      backgroundColor: yellow[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function DarkModeSwitch() {
  const darkMode = useDarkMode(false);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <YellowSwitch
            checked={darkMode.value}
            onChange={darkMode.toggle}
            name="darkModeToggle"
          />
        }
        label="Dark mode"
      />
    </FormGroup>
  );
}
