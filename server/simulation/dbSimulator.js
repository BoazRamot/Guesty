const { connectDB } = require('../services/database/db');
const { createEmailReport } = require('./emailReportSimulator');
const { findNextEvent } = require('../logic/emailReportLogic');
const EmailReport = require('../models/emailReport');

async function saveToDB(emailReport) {
  try {
    await emailReport.save();
  } catch (error) {
    console.error(error.message);
  }
}

async function startDBSimulator(numOfReports = 5) {
  await connectDB();
  Array(numOfReports)
    .fill(true)
    .forEach(() => {
      const emailReportFields = createEmailReport();
      emailReportFields.nextEventDate = findNextEvent({
        recurrence: emailReportFields.recurrence,
        timezone: emailReportFields.timezone,
      });
      const emailReport = new EmailReport(emailReportFields);
      saveToDB(emailReport);
    });
}

module.exports = { startDBSimulator };
