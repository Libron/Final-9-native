import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import ContactList from "./components/ContactList/ContactList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>My Contacts</Text>
                </View>
                <View style={styles.content}>
                    <ContactList />
                </View>
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#bf360c',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
    header: {
      padding: 6,
      flex: 1,
        alignContent: 'center',
    },
    title: {
      textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30
    },
    content: {

      flex: 9,
        justifyContent: 'flex-start',
    }
});