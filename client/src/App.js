import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { changeDarkMode } from './slices/appSlice';
import { getEmailReportsList } from './apis/emailReportsList';
import MainAppBar from './components/MainAppBar';
import EmailReportTableResults from './components/SearchResults/EmailReportTableResults';

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    minHeight: 'calc(100vh - 7rem)',
    flexGrow: 1,
    paddingTop: '7rem',
  },
}));

function App() {
  const { isDarkMode } = useSelector((state) => ({
    isDarkMode: state.app.isDarkMode,
  }));
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  const darkModeHandler = () => {
    dispatch(changeDarkMode());
  };

  useEffect(() => {
    dispatch(getEmailReportsList());
  }, [dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper className={classes.contentRoot}>
          <MainAppBar
            darkModeHandler={darkModeHandler}
            isDarkMode={isDarkMode}
          />
          <EmailReportTableResults />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
