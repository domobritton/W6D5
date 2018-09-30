import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Widgets = (props) => (
  [
    <Clock />,
    <Tabs
      folders={
        [
          {title: 'TabOne', content: 'One', id: 10},
          {title: 'TabTwo', content: 'Two', id: 11},
          {title: 'TabThree', content: 'Three', id: 12}
        ]
      }/>,
    <Weather />
  ]
);

export default Widgets;
