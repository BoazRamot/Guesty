const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailReportSchema = new Schema({
  recipientsList: {
    type: [String],
    required: true,
  },
  emailBody: {
    type: String,
    required: true,
  },
  recurrence: {
    days: {
      type: [String],
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  nextEventDate: {
    dateObj: {
      type: Date,
      required: true,
    },
    dateMs: {
      type: Number,
      required: true,
    },
  },
  timezone: {
    type: String,
    required: true,
  },
  treated: {
    type: Date,
  },
});

const EmailReport = mongoose.model('emailReport', emailReportSchema);

module.exports = EmailReport;
