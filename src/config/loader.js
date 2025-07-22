const fs = require('fs');
const path = require('path');

function loadConfig(env = process.env.NODE_ENV || 'dev') {
  const fileMap = {
    dev: 'dev.json',
    development: 'dev.json',
    staging: 'staging.json',
    prod: 'prod.json',
    production: 'prod.json',
  };

  const fileName = fileMap[env] || 'dev.json';
  const filePath = path.join(__dirname, '..', '..', 'config', fileName);
  const raw = fs.readFileSync(filePath);
  const cfg = JSON.parse(raw);
  return cfg;
}

module.exports = { loadConfig };
