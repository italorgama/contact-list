import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



const Header = (props) => (
	<View style={style.container}>
	<Text style={style.tittle}>{props.title}</Text>
	</View>
);

const style = StyleSheet.create({
	container: {
		marginTop: 25,
		backgroundColor: '#288BD1',
		alignItems: 'center',
		justifyContent: 'center',

	},
	tittle: {
		fontSize: 50,
		color: '#fff',
	}

});

export default Header; //Necessario para chamar esse arquivo em outros arquivos...


