module.exports = {
  server: 'localhost',
  port: 27017,
  database: 'task',
  username: 'admin',
  password: 'ads',
  getUrl: function() {
    return `mongodb://${this.server}:${this.port}/${this.database}`;
  }
};