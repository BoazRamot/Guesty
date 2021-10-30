import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';
import TableBodyRows from './TableBodyRows';

const useStyles = makeStyles((theme) => ({
  tablePaper: {
    width: '80%',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: 'calc(91vh - 7rem)',
    marginBottom: '5rem',
  },
  table: {
    minWidth: 750,
  },
  tableBody: {
    height: 'calc(91vh - 64px - 52px - 7rem)',
  },
}));

function EmailReportTable({ page, rowsPerPage, rows }) {
  const classes = useStyles();

  return (
    <Table className={classes.table} component="div">
      <TableBody component="div" className={classes.tableBody}>
        <TableBodyRows
          itemCount={rowsPerPage}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </TableBody>
    </Table>
  );
}

export default EmailReportTable;
