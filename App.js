import React from 'react';
import { createStackNavigator } from 'react-navigation'; 
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const MyNavigator = createStackNavigator(
  {
    'Main': PeoplePage,
    'PeopleDetail': PeopleDetailPage
  },
  {
    initialRouteName: 'Main',
  }  
);

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}