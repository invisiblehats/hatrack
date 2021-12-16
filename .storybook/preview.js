import "../src/styles/hatrack.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        "Overview", ["Getting Started", "*"],
        "Utilities", ["Overview", "*"],
        "Elements", ["Overview", "*"],
        "Modules", ["Overview", "*", ["Getting Started", "*"]]
      ],
      locales: '',
    },
  },
}