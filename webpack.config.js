const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const mode = NODE_ENV === 'development' ? 'dev' : 'dev';

module.exports = {
  devtool: 'source-map',
  entry: {
    styles: path.join(__dirname, 'node_modules', 'antd', 'dist', 'antd.less'),
    main: path.join(__dirname, 'src', 'client', `index.${mode}`),
  },
  plugins: [
    // new webpack.ContextReplacementPlugin(/locale$/, /en/),

    // Fixes warning in moment-with-locales.min.js 
    //   Module not found: Error: Can't resolve './locale' in ...
    // new webpack.IgnorePlugin(/\.\/locale$/),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|fr/),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './demo',
    port: 9001,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  module: {
    // noParse: [/moment.js/],
    rules: [
      // less
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      // JS/TS
      // { test: /\.jsx?$/, use: [{ loader: 'babel-loader' }] },
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] },
      // images
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: { limit: 10240 },
        }],
      },
      // Font
      {
        test: /\.svg(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 65000, mimetype: 'image/svg+xml' },
          },
        ],
      },
      {
        test: /\.woff(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 65000, mimetype: 'application/font-woff' },
        }],
      },
      {
        test: /\.woff2(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 65000, mimetype: 'application/font-woff2' },
        }],
      },
      {
        test: /\.[ot]tf(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 65000, mimetype: 'application/octet-stream' },
        }],
      },
      {
        test: /\.eot(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 65000, mimetype: 'application/vnd.ms-fontobject' },
        }],
      },
    ],
  },
};
