import { createSlice } from '@reduxjs/toolkit';
import {
  getEmailReportsList,
  getEmailReportsListByRange,
  treatEmailReportsListByRange,
  treatEmailReportsList,
} from '../apis/emailReportsList';

export const emailReportsSlice = createSlice({
  name: 'emailReports',
  initialState: {
    rows: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmailReportsList.fulfilled]: (state, action) => {
      state.rows = action.payload;
    },
    [getEmailReportsListByRange.fulfilled]: (state, action) => {
      state.rows = action.payload;
    },
    [treatEmailReportsListByRange.pending]: (state, action) => {
      state.rows = state.rows.map((item) => {
        return {
          ...item,
          loading: true,
        };
      });
      state.loading = true;
    },
    [treatEmailReportsListByRange.fulfilled]: (state, action) => {
      state.rows = state.rows.map((item) => {
        return {
          ...item,
          loading: false,
        };
      });
      state.loading = false;
    },
    [treatEmailReportsList.pending]: (state, action) => {
      state.rows = state.rows.map((item) => {
        return {
          ...item,
          loading: true,
        };
      });
      state.loading = true;
    },
    [treatEmailReportsList.fulfilled]: (state, action) => {
      state.rows = state.rows.map((item) => {
        return {
          ...item,
          loading: false,
        };
      });
      state.loading = false;
    },
  },
});

export const { treatEmails } = emailReportsSlice.actions;

export default emailReportsSlice.reducer;
