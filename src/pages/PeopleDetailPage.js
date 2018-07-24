import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../util';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component{
    static navigationOptions = ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(
            navigation.state.params.people.name.first
        );

        return {
            title: peopleName,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                flexGrow: 1                  
            }
        };
      };
      
    render(){
       const { people } = this.props.navigation.state.params;        
       return(
            <ScrollView style={styles.container}>
                <Image source= {{ uri: people.picture.large }} 
                style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email}/>
                    <Line label="Cidade:" content={people.location.city}/>
                    <Line label="Estado:" content={people.location.state}/>
                    <Line label="Tel:" content={people.phone}/>                    
                    <Line label="Cel:" content={people.cell}/>
                    <Line label="Nacionalidade:" content={people.nat}/>                                      
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 15,

    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },       
});