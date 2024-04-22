const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        chart: './source/chart.js',
        view: './source/view.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}