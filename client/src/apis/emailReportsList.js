import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const BASE_URL = 'http://localhost:5000/api/emailReports';

export const getEmailReportsList = createAsyncThunk(
  'emailReports/getEmailReportsList',
  async () => {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/getList`,
    });
    return data.data;
  },
);

export const getEmailReportsListByRange = createAsyncThunk(
  'emailReports/getEmailReportsListByRange',
  async (range) => {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/getListByRange`,
      params: { range },
    });
    return data.data;
  },
);

export const treatEmailReportsListByRange = createAsyncThunk(
  'emailReports/treatEmailReportsListByRange',
  async (range) => {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/treatListByRange`,
      params: { range },
    });
    return data.data;
  },
);

export const treatEmailReportsList = createAsyncThunk(
  'emailReports/treatEmailReportsList',
  async () => {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/treat`,
    });
    return data.data;
  },
);
