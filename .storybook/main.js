const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // Add Sass to storybook
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '../styles'),
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            url: false, // This was the important key ** see explanation
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    })

    // Copy all assets to publicPath
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public/assets/img'),
            to: './img',
          },
        ],
      })
    )

    return config
  },
}
