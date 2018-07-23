import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#6ca2f7'
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
        .get('https://randomuser.me/api/?nat=BR&results=5')
        .then(response => {
          const { results } = response.data;      
          this.setState({
            peoples: results
          });   
        })
  }

  render() {
    return (
      <View>
          <Header title="Pessoas!" />
          <PeopleList peoples={this.state.peoples}/>       
      </View>
    );
  }
}
