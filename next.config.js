// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [
    withAntdLess,
    {
      // optional
      // modifyVars: { '@primary-color': '#04f' },
      // optional
      // lessVarsFilePath: './src/styles/variables.less',
      // optional
      // lessVarsFilePathAppendToEndOfContent: false,
      // optional https://github.com/webpack-contrib/css-loader#object
      cssLoaderOptions: {
        esModule: false,
        sourceMap: false,
        modules: {
          mode: 'local',
        },
      },

      // Other Config Here...

      webpack(config) {
        return config;
      },

      future: {
        // if you use webpack5
        webpack5: true,
      },
    },
  ],
  [withBundleAnalyzer, {}],
]);
