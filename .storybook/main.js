module.exports = {
  "stories": [
    "../spec/**/*.stories.mdx",
    "../docs/**/*.stories.mdx",
    "../spec/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html"
}