import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import EmailReportTableBar from './EmailReportTableBar';
import EmailReportMainTable from './EmailReportMainTable';

const useStyles = makeStyles((theme) => ({
  tablePaper: {
    width: '95%',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: 'calc(96vh - 7rem)',
    marginBottom: '1rem',
  },
}));

function EmailReportTableResults() {
  const classes = useStyles();
  return (
    <Paper className={classes.tablePaper}>
      <EmailReportTableBar />
      <Grid container style={{ height: '3rem', paddingTop: '5px' }}>
        <Grid item xs={1}>
          <Typography variant="button">status</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="button">Next Event Date</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="button">Recipients</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="button">timezone</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="button">Recurrence time</Typography>
        </Grid>
      </Grid>
      <EmailReportMainTable />
    </Paper>
  );
}

export default EmailReportTableResults;
