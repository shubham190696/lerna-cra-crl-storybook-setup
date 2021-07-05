import React from 'react';

import Button from './index';

export default {
  title: 'Stickler Signs/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  style: {
    color: '#fff',
    background: '#989798',
    padding: '1em',
    borderOutline: 'none',
    borderRadius: '.25em',
    boxShadow: 'none',
    cursor: 'pointer',
  },
};

export const Disabled = (args) => <Button {...args} />;
Disabled.args = {
  children: 'Disabled Button',
  style: {
    color: '#fff',
    background: '#ccc',
    padding: '1em',
    borderOutline: 'none',
    borderRadius: '.25em',
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  disabled: true,
};
