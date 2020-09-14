import { makeStyles } from '@material-ui/core/styles';

export const usePlayButtonStyles = makeStyles((theme) => ({
  flexbox: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '250px',
  },
  card: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -80%)',
    backgroundColor: '#e6e6e6',
  },
  button: {
    backgroundColor: 'yellow',
  },
}));
