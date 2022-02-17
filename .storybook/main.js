module.exports = {
  "stories": [
    "../docs/**/*.stories.mdx",
    "../spec/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react"
}
