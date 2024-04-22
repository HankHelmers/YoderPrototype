const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
       // chart: './source/chart.js',
        controller: './source/controller.js',
        model: './source/model.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}