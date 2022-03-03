import React from 'react';

const themes = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
const variations = ['', 'soft']

export default {
  title: 'Components/Alerts/Examples',
  docs: false,
  argTypes: {
    theme: {
      control: {
        type: "select",
      },
      options: themes,
    },
    variation: {
      control: {
        type: "select",
      },
      options: variations,
    },
  },
  controls: { expanded: true },
};


const Alert = ({theme, variation}) => {
  const alertClass = ['alert', variation, theme].filter(item => !!item).join('-')
  return (
    <div
      className={`alert ${alertClass}`}
      role="alert">
      A simple primary alert—check it out!
    </div>
  )
}

export const Basic = ({theme, variation}) => (
  <div>
    <Alert theme={theme} variation={variation} />
  </div>
)

Basic.args = {
  theme: themes[0],
  variation: variations[0]
}

export const Variations = () => (
  <div>
    {themes.map(theme => (
      <div key={theme}>
        <Alert theme={theme} />
      </div>
    ))}
  </div>
)

Variations.args = {
  variation: false
}

export const SoftVariations = () => (
  <div>
    {themes.map(theme => (
      <div key={theme}>
        <Alert theme={theme} variation="soft" />
      </div>
    ))}
  </div>
)
