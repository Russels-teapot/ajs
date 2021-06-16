const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist/index.js',
        library: 'ajs',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
