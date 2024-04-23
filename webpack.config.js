const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        data: './source/data.js',
        chart: './source/chart.js',
        controller: './source/controller.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}