import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TablePagination } from '@material-ui/core';
import EmailReportTable from './EmailReportTable';

function EmailReportMainTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { rows } = useSelector((state) => ({
    rows: state.emailReports.rows,
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <EmailReportTable
        page={page}
        rowsPerPage={rowsPerPage}
        rows={rows}
      />
      <TablePagination
        rowsPerPageOptions={[
          5,
          10,
          25,
          { value: rows.length, label: 'All' },
        ]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default EmailReportMainTable;
