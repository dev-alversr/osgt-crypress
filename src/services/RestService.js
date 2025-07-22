const BaseService = require('./BaseService');
const fetch = require('node-fetch');

class RestService extends BaseService {
  async get(path, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, { method: 'GET', ...options });
    return response.json();
  }
}

module.exports = RestService;
