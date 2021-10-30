import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
}));

function MainAppBar({ darkModeHandler, isDarkMode }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Api Results
        </Typography>
        <div className={classes.grow} />
        <IconButton onClick={darkModeHandler}>
          {isDarkMode ? <LightIcon /> : <DarkIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;
