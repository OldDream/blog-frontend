const withSass = require("@zeit/next-sass")
const withCss = require("@zeit/next-css")
const withPlugins = require("next-compose-plugins")
const withImages = require('next-images')

module.exports = withPlugins([
  [
    withCss,
    {
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style\/css.*?/
          const origExternals = [...config.externals]
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback()
              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback)
              } else {
                callback()
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ]

          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          })
        }
        return config
      }
    },
  ],
  [
    withSass,
    {

    }
  ],
  [
    withImages,
    {

    }
  ],
])