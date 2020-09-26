import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

export const useProfileDialogStyles = makeStyles((theme) => ({
  avatar: {
    float: 'left',
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
