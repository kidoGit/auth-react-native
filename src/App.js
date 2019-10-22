import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;