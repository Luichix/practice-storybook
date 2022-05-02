module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async  (config) => {
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.css')
    )
  
    // We exclude `*.module.css` files from the previous rule
    cssRule.exclude = /\.module\.css$/
  
    // We add a our custom rule for `*.module.css` files
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    })
  
    return config
  }
  
}