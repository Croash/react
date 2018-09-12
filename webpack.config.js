const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const argv = require('yargs').argv

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'

const appDirectory = fs.realpathSync(process.cwd())
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}
const paths = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appStatic: resolveApp('public/static'),
  appSrcStatic: resolveApp('static'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules')
}

// Common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks(module) {
      const context = module.context
      return context && context.indexOf('node_modules') >= 0
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    filename: 'manifest-[hash].js',
    chunks: ['vendor']
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(paths.appSrc, 'index.html'),
    path: paths.appPublic,
    filename: 'index.html',
    chunks: [ 'app', 'vendor', 'manifest' ]
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10'
          ]
        })
      ],
      context: paths.appSrc
    }
  })
]

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.json$/,
    use: 'json-loader'
  },
  {
    test: /\.(png|gif|jpg|svg|ttf|eot|woff|woff2|otf?)$/,
    use: 'file-loader?limit=20480&name=assets/[name]-[hash].[ext]'
  }
]

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'style-[contenthash].css',
      allChunks: true
    })
  )

  // Production rules
  rules.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader'
        ]
      })
    }
  )
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    }
  )
  rules.push(
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      })
    }
  )
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )

  // Development rules
  rules.push(
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }
  )
  rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }
  )
  rules.push(
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader?sourceMap'
      ]
    }
  )
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: paths.appSrc,
  entry: {
    app: [ paths.appIndexJs ]
  },
  output: {
    path: paths.appPublic,
    publicPath: '/',
    filename: isProduction ? '[name]-[chunkhash].js' : '[name]-[hash].js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    alias: {
      'src': paths.appSrc
    },
    modules: [
      paths.appNodeModules,
      paths.appSrc
    ]
  },
  plugins,
  devServer: {
    contentBase: isProduction ? paths.appPublic : path.join(paths.appSrcStatic, '..'),
    historyApiFallback: true,
    port: parseInt(argv.port || '8080'),
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: false,
      colors: {
        green: '\u001b[32m'
      }
    }
  }
}
