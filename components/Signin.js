import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin,  GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '630653283925-8dq96en0hbmc1knqf8aqiq7j8phldlsj.apps.googleusercontent.com',
  });

export default class Signin extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    userLogin = () => {
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user);
                console.log('User loged in!');
            })
            .catch(error => {
                console.log('Login unsuccessfull !');
            });
    }
    onGoogleButtonPress=async() => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        console.log((await user).user);
    }
    render() {
        return (
            <View>
                <Text style={styles.label}> Signin </Text> 
                <TextInput
                style={styles.input}
                    label="Enter Your Email"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        {email: text}
                    )}/>
                <TextInput
                style={styles.input}
                    label="Enter Your Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        {password: text}
                    )}/>
                <Button style={styles.btn} mode="contained" onPress={this.userLogin}>
                    LogIn
                </Button>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.onGoogleButtonPress}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        width: 300
    },
    constainer: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: 300,
        marginTop: 15
    },
    label: {
        marginBottom: 150,
        marginTop: 50
    }
})

