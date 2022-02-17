// Button.stories.js|jsx

import React from 'react';

const Button = ({ text, theme }) => (
  <button className={['btn', `btn-${theme}`].join(' ')}>{text}</button>
)

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button/Demos',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Colors = Template.bind({});
Colors.args = {
  theme: 'primary',
  text: 'Click me',
};
