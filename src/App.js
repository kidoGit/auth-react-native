import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAEnUvhDkRJOdSD9gLusdp0M6Q1SACpXlk",
            authDomain: "auth-react-native-be3bd.firebaseapp.com",
            databaseURL: "https://auth-react-native-be3bd.firebaseio.com",
            projectId: "auth-react-native-be3bd",
            storageBucket: "auth-react-native-be3bd.appspot.com",
            messagingSenderId: "1007241663527",
            appId: "1:1007241663527:web:4cce032b8b71b60e66ea02",
            measurementId: "G-4MX82KMM5G"
        });
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>An app!</Text>
            </View>
        );
    };
}

export default App;