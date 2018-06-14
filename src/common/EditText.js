import React from 'react';
import { TextInput, Text, View } from 'react-native';

const EditText = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
return (
	<View style={styles.containerStyle}>
	<Text style={styles.labelStyle}>{label}</Text>
	<TextInput
	secureTextEntry={secureTextEntry}
	placeholder={placeholder}
	style={styles.inputStyle}
	autoCorrect={false} 
	value={value}
	onChangeText={onChangeText}
	/>
	</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { EditText };
