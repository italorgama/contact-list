import React from 'react';
import { createStackNavigator } from 'react-navigation'; 
import PeoplePage from './src/pages/PeoplePage';

export default class App extends React.Component {
    render() {
      return <MyNavigator />;
    }
  }
const MyNavigator = createStackNavigator({
    'Main': PeoplePage,
});
