import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

const Widgets = (props) => (
  [
    <Clock />,
    <Weather />,
    <Tabs
      folders={
        [
          {title: 'TabOne', content: 'You clicked One', id: 10},
          {title: 'TabTwo', content: 'You clicked Two', id: 11},
          {title: 'TabThree', content: 'You clicked Three', id: 12}
        ]
      }/>,
    <AutoComplete names={
        [
          'David',
          'Daniel',
          'Eli',
          'Evan',
          'Felix',
          'Frank',
          'Jenn',
          'Liz'
        ]
      }/>
  ]
);

export default Widgets;
