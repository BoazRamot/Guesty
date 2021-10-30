import { useSelector, useDispatch } from 'react-redux';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect, useCallback } from 'react';

import {
  getEmailReportsListByRange,
  getEmailReportsList,
  treatEmailReportsListByRange,
  treatEmailReportsList,
} from '../../apis/emailReportsList';

const useStyles = makeStyles((theme) => ({
  tableBody: {
    height: '95vh',
  },
  tableSearch: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  tableSearchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableInputRoot: {
    color: 'inherit',
  },
  tableInputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  grow: {
    flexGrow: 1,
  },
  serachIconButton: {
    padding: 10,
  },
}));

function EmailReportTableBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rows, loading } = useSelector((state) => ({
    rows: state.emailReports.rows,
    loading: state.emailReports.loading,
  }));
  const [range, setRange] = useState('');

  const handleRange = (e) => {
    setRange(e.currentTarget.value);
  };

  const handleClear = (e) => {
    setRange('');
    dispatch(getEmailReportsList());
  };

  const handleGetByRange = useCallback(() => {
    dispatch(getEmailReportsListByRange(range));
  }, [dispatch, range]);

  const handleReport = () => {
    dispatch(treatEmailReportsListByRange(range));
  };

  const handleTreat = () => {
    dispatch(treatEmailReportsList());
  };

  useEffect(() => {
    if (!loading && range && rows.length !== 0) {
      handleGetByRange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, handleGetByRange, range]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div">
          Email Reports Results
        </Typography>
        <div className={classes.grow} />
        <TextField
          value={range}
          onChange={handleRange}
          type="number"
          helperText="Get List By Hours"
        />
        <IconButton disabled={!Boolean(range)} onClick={handleClear}>
          <RotateLeftIcon />
        </IconButton>
        <IconButton disabled={!range} onClick={handleGetByRange}>
          <SearchIcon />
        </IconButton>
        <div className={classes.grow} />
        <Button
          disabled={rows.length === 0 || !Boolean(range)}
          onClick={handleReport}
          color="secondary"
        >
          Manual Treat List
        </Button>
        <Button onClick={handleTreat} color="secondary">
          Treat ALL IN RANGE
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default EmailReportTableBar;
