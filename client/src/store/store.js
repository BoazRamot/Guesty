import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slices/appSlice';
import emailReportsReducer from '../slices/emailReportsSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    emailReports: emailReportsReducer,
  },
});
