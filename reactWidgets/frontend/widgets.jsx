import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Widgets = (props) => (
  [
    <Clock />,
    <Tabs
      folders={
        [
          {title: 'TabOne', content: 'One'},
          {title: 'TabTwo', content: 'Two'},
          {title: 'TabThree', content: 'Three'}
        ]
      }/>
  ]
);

export default Widgets;
