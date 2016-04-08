/**
 * Created by Administrator on 2016/4/8.
 */
module.exports = {
    entry: './modules/main.js',
    output: {
        path: './build', // This is where images AND js will go
        publicPath: './build/', // This is used to generate URLs
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};

