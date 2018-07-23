import React from 'react';
import { createStackNavigator } from 'react-navigation'; 
import PeoplePage from './src/pages/PeoplePage';

const MyNavigator = createStackNavigator({
    'Main': PeoplePage,
});

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}