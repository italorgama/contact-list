import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
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
        peoples: [],
        loading: false,
        error: false,
    };
  }

  componentDidMount(){ 
    this.setState({ loading: true});
    setTimeout(() => {
        axios
            .get('https://randomuser.me/api/?nat=BR&results=15')
            .then(response => {
                const { results } = response.data;      
                this.setState({
                  peoples: results,
                  loading: false,
                });   
            }).catch(error => {
                this.setState({ 
                  loading: false,
                  error: true,
                 })
            }); 
    }, 3500)          
  } 

  render() {    
    return (
      <View style={styles.container}>
          {
             this.state.loading 
                ? <ActivityIndicator size="large" color="#6ca2f7" />
                : this.state.error
                    ? <Text style={styles.error}>Ops... Algo deu errado :'( </Text>
                    : <PeopleList 
                          peoples={this.state.peoples}
                          onPressItem={pageParams => {
                            this.props.navigation.navigate('PeopleDetail', pageParams);
                          }}/>
          }                 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
  },
  error: {
    color:'red',
    alignSelf: 'center',
    fontSize: 18,
  }
});