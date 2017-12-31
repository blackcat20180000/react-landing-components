//https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
module.exports = {
    entry: {
        pricingTable: './js/components/pricing-table.jsx'
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
      rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
            test: /\.jsx$/,
            use: [{
                loader: "babel-loader"
            }]
        }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
};