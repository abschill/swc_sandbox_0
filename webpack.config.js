const path = require( 'path' );
module.exports = {
    "entry": {
        foo: './lib/foo.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: '[name].js'
    },
    module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              // `.swcrc` can be used to configure swc
              loader: "swc-loader"
            }
          }
        ]
      }
}