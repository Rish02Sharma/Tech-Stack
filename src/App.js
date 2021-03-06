import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './common';
import LibraryList from './LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
		<View>
		<Header headerText="Text Stack" />
		<LibraryList />
		</View>
		</Provider>
		);
};

export default App;
