// Button.stories.js|jsx

import React from 'react';

const Button = ({ text, theme }) => (
  <button className={['btn', `btn-${theme}`].join(' ')}>{text}</button>
)

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button/Demos',
  component: Button,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Button {...args} />;

//๐ Each story then reuses that template
export const Colors = Template.bind({});
Colors.args = {
  theme: 'primary',
  text: 'Click me',
};
