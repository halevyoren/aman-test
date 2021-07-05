const express = require('express');
const router = express.Router();

const Log = require('../models/logModel');

const getLog = async (req, res, next) => {
  let log;
  try {
    log = await Log.findById(req.params.log_id);
    if (log === null) {
      res.status(404).json({ message: 'Log not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

  res.log = log;
  next();
};

//Getting all logs
router.get('/', async (req, res) => {
  try {
    const allLogs = await Log.find();
    res.status(200).json(allLogs);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

//Getting one log
router.get('/:log_id', getLog, async (req, res) => {
  res.status(200).json({ log: res.log });
});

//Creating log
router.post('/', async (req, res) => {
  const newLogData = new Log({
    name: req.params.name,
    phoneNumber: req.body.phoneNumber,
    callDate: new Date()
  });
  try {
    const newLog = await newLogData.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

//Updating log
router.patch('/:log_id', getLog, async (req, res) => {
  if (res.log.name !== null) {
    res.log.name = req.body.name;
  }
  if (res.log.phoneNumber !== null) {
    res.log.phoneNumber = req.body.phoneNumber;
  }
  try {
    res.save();
    res.status(201).json({ log: res.log });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

//Deleting log
router.delete('/:log_id', getLog, async (req, res) => {
  try {
    await res.log.remove();
    res.json({ message: 'Log Deleted' });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
