const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        controller: './source/controller.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}