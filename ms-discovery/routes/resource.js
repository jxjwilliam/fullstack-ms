import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();

const MSR = 'msconfig';

router.get('/', function (req, res) {
  const msf = path.join(__dirname, '..', `${MSR}.json`);
  const contents = fs.readFileSync(msf, 'utf8');
  const list = JSON.parse(contents);
  const urls = Object.keys(list);
  res.json(urls);
});

router.get('/:host/:ms', (req, res) => {
  const msf = path.join(__dirname, '..', `${MSR}.json`);
  const contents = fs.readFileSync(msf, 'utf8');
  const list = JSON.parse(contents);
  const { host, ms } = req.params;
  const service = list[host].ms[ms];
  if (service) res.status(200).json(service);
  else res.redirect(`/msconfig/${host}`);
});

router.get('/:host', (req, res) => {
  const msf = path.join(__dirname, '..', `${MSR}.json`);
  const contents = fs.readFileSync(msf, 'utf8');
  const list = JSON.parse(contents);
  const { host } = req.params;
  res.json(list[host]);
});

module.exports = router;
