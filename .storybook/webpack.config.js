const path = require("path")

module.exports = ({ config }) => {
  config.resolve.alias = {
    "docs": path.resolve(__dirname, "..", "docs"),
    "src": path.resolve(__dirname, "..", "src"),
  }

  return config
}
