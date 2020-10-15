const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  distDir: "nextjs",
  experimental: {
    sprFlushToDisk: false,
  },
  plugins: [new Dotenv()],
  webpack(config) {
    // url loader
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      // include: [path.resolve(__dirname, 'node_modules/react-images-upload')],
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
};
