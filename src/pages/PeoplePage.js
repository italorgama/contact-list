import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  static navigationOptions = {
    title: 'Pessoas',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      flexGrow: 1
            
    }
  };  
  
  constructor(props){
    super(props);
    this.state = {
        peoples: []
    };
  }

  componentDidMount(){ 
    axios
        .get('https://randomuser.me/api/?nat=BR&results=30')
        .then(response => {
          const { results } = response.data;      
          this.setState({
            peoples: results
          });   
        })
  }

  render() {
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
          <PeopleList 
              peoples={this.state.peoples}
              onPressItem={pageParams => {
                this.props.navigation.navigate('PeopleDetail', pageParams);
              }}/>       
      </View>
    );
  }
}
