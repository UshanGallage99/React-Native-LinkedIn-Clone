import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
export default class Signup extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: '',
            userName: ''
        };
        auth().onAuthStateChanged((user) => {
             if (user) {
                 console.log('User display name: ', user.displayName);
             }
        });
    }

    registerUser = ()=>{
        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
            createdUser.user.updateProfile({
                displayName: this.state.userName
            })
          console.log('User account created & signed in!');
          console.log(createdUser.userName);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
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
                
                <Text style={styles.label}> Signup </Text>  
                <TextInput
                style={styles.input}
                    label="Enter Your"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        {email: text}
                    )}/>
                <TextInput
                    style={styles.input}
                    label="Enter Your Name"
                    value={this.state.userName}
                    onChangeText={text => this.setState(
                        {userName: text}
                    )}/>
                <TextInput
                style={styles.input}
                    label="Enter Your Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        {password: text}
                    )}/>
                <Button style={styles.btn} mode="contained" onPress={this.registerUser}>
                   Continue 
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
    // btn: {
    //     marginTop: 20,
    //     width: 300
    // },
    // constainer: {
    //     flex: 1,
    //     alignItems: 'center'
    // },
    // input: {
    //     width: 300,
    //     marginTop: 15
    // },
    // label: {
    //     marginBottom: 150,
    //     marginTop: 50
    // }
})
