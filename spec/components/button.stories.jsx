// Button.stories.js|jsx

import React from 'react';

export const Primary = () => <button className="btn btn-primary">Click me</button>;

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Button/Examples',
    component: Primary,
};


