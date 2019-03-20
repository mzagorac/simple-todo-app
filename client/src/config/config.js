const devUrl = {
    host: '127.0.0.1',
    port: 3001,
    path: 'tasks',
    getUrl: function() {
        return `http://${this.host}:${this.port}/${this.path}`
    }
}

export const url = devUrl.getUrl();