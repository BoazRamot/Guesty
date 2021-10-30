const { createWriteStream } = require('fs');
const express = require('express');
const EmailReport = require('../models/emailReport');

const router = express.Router({ mergeParams: true });
const FILE_PATH = './treatedQueries.log';
const log = createWriteStream(FILE_PATH, { flags: 'a', start: 0 });

router
  .get('/getList', async (req, res) => {
    try {
      const dbRes = await EmailReport.find().sort({ 'nextEventDate.dateMs': 1 });
      res.json(dbRes);
    } catch {
      res.json([]);
    }
  })
  .get('/getListByRange', async (req, res) => {
    const { range } = req.query;
    try {
      const numRange = 1000 * 60 * 60 * Number(range);
      const dbRes = await EmailReport.find({
        'nextEventDate.dateMs': { $lt: Date.now() + numRange },
        treated: { $eq: undefined },
      }).sort({ 'nextEventDate.dateMs': 1 });
      res.json(dbRes);
    } catch {
      res.json([]);
    }
  })
  .get('/treatListByRange', async (req, res) => {
    const { range } = req.query;
    const numRange = 1000 * 60 * 60 * Number(range);
    try {
      const dbRes = await EmailReport.find({
        'nextEventDate.dateMs': { $lt: Date.now() + numRange },
        treated: { $eq: undefined },
      }).sort({ 'nextEventDate.dateMs': 1 });
      if (dbRes.length === 0) res.json(dbRes);
      for (let index = 0; index < dbRes.length; index++) {
        const element = dbRes[index];
        const treated = new Date(Date.now());
        element.treated = treated;
        dbRes[index].treated = treated;
        await element.save();
        log.write(`{${JSON.stringify(element)}}\n`);
      }
      res.json(dbRes);
    } catch {
      res.json([]);
    }
  })
  .get('/treat', async (req, res) => {
    const numRange = 1000 * 60 * 60 * 1;
    try {
      const dbRes = await EmailReport.find({
        'nextEventDate.dateMs': { $lt: Date.now() + numRange },
        treated: { $eq: undefined },
      }).sort({ 'nextEventDate.dateMs': 1 });
      if (dbRes.length === 0) res.json(dbRes);
      for (let index = 0; index < dbRes.length; index++) {
        const element = dbRes[index];
        const treated = new Date(Date.now());
        element.treated = treated;
        dbRes[index].treated = treated;
        await element.save();
        log.write(`{${JSON.stringify(element)}}\n`);
      }
      res.json(dbRes);
    } catch {
      res.json([]);
    }
  });

module.exports = router;
