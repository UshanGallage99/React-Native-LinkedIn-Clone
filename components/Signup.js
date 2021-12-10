import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
              email: '',
              password: '',
              userName: ''
        };
         
         
    }
    clearText = () => {
        this.setState({ email: '' })
        this.setState({ password: '' })
        this.setState({ userName: '' })
    }

    registerUser = () => {
        auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password,)
            .then(async (createdUser) => { 
               await createdUser.user.updateProfile({
                    displayName: this.state.userName
                    
                })
                auth().onAuthStateChanged((user) => {
                    if (user) {
                        
                        console.log('User display name: ', user.displayName);
                        console.log(user);
                        console.log('User account created & signed in!');
                        AsyncStorage.setItem('name', user.displayName);
                        this.props.navigation.navigate('TabScreen')
                        this.clearText();
                        
                    }
                });
              })
            .catch(error => {   
                switch(error.code) {
                  case 'auth/email-already-in-use':
                        Alert.alert('Email already in use please signin !')
                        this.clearText();
                        break;
                        case 'auth/invalid-email':
                            Alert.alert('That email address is invalid !')
                            this.clearText();
                            break;
               }
                // console.error(error);
            });
    }
    onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        console.log('User account created & signed in!');  
        console.log((await user).user);

        if ((await user).user.displayName != null) {
            await AsyncStorage.setItem('name', (await user).user.displayName);
            this.props.navigation.navigate('TabScreen')
            console.log((await user).user.displayName);
          } else {
        }
        
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/Linkedin-Logo.png')}
                />
                <Text>
                {"\n"}
                </Text>
                <Text style={styles.txt5}>Join Linkedin</Text>
               
                    <TouchableOpacity style={styles.btn8}
                    onPress={() => navigate('Signin', { name: 'Signin' })}
                    >
                    <Text style={styles.orT}>or
                    <Text style={styles.btn7}> sign in</Text>
                    </Text>
                        
                    </TouchableOpacity>
                 
                <Input style={styles.txtinput1}
                    placeholder="Email or Phone"
                    value={this.state.email}
                     onChangeText={text => this.setState(
                          {email: text}
                      )}
                />
                <Input style={styles.txtinput1}
                    placeholder="Username "
                    value={this.state.userName}
                      onChangeText={text => this.setState(
                          {userName: text} 
                      )}
                />
                <Input style={styles.txtinput2}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                     onChangeText={text => this.setState(
                          {password: text}
                      )}
                // right={<TextInput.Icon name="eye" />}
                />
                <Button style={styles.btn1} onPress={
                    this.registerUser
                    } >
                    <Text style={styles.txt1}>Continue</Text>
                </Button>
                <Text>
                {"\n"}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 2, backgroundColor: '#ADC2A9'}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>or</Text>
                </View>
                <View style={{flex: 1, height: 2, backgroundColor: '#ADC2A9'}} />
                </View>
                <TouchableOpacity style={styles.btn2} onPress={this.onGoogleButtonPress}>
                    <Image
                        style={styles.tinyLogo2}
                        source={require('../assets/google-logo.png')}
                    />
                    <Text style={styles.txt2}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            //         {/* <Image
            //         resizeMode='contain'
            //         style={{
            //         width: 200, 
            //         position: 'absolute',                  
            //         }}
            //       source={require('../assets/Linkedin-Logo.png')}/> */}


            //     <Text style={styles.label}> Signup </Text>  

            //     <TextInput
            //     style={styles.input}
            //         label="Enter Your"
            //         value={this.state.email}
            //         onChangeText={text => this.setState(
            //             {email: text}
            //         )}/>
            //     <TextInput
            //         style={styles.input}
            //         label="Enter Your Name"
            //         value={this.state.userName}
            //         onChangeText={text => this.setState(
            //             {userName: text}
            //         )}/>
            //     <TextInput
            //     style={styles.input}
            //         label="Enter Your Password"
            //         value={this.state.password}
            //         onChangeText={text => this.setState(
            //             {password: text}
            //         )}/>
            //     <Button style={styles.btn} mode="contained" onPress={this.registerUser}>
            //        Continue 
            //     </Button>
            //     <GoogleSigninButton
            //         style={{ width: 192, height: 48 }}
            //         size={GoogleSigninButton.Size.Wide}
            //         color={GoogleSigninButton.Color.Dark}
            //         onPress={this.onGoogleButtonPress}
            //         /> 
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        color: '#FEFEFE',
    },
    tinyLogo: {
        marginTop: 10,
        width: 100,
        height: 25,
        marginLeft: 10
    },
    txt5:{
        fontSize:30, 
        color:'#202124',
        marginTop:20,
        marginLeft:5
    },
    btn7: {
        fontSize:17, 
        color: '#0A66C2',

    },
    orT:{
        fontSize:17,
    },
    txtinput1: {
        marginTop: 10
    },
    btn1:{
        marginTop:10,
        backgroundColor:'#0A66C2',
        width: 350,
        height: 50,
        alignSelf:'center',
        borderRadius:30
      },
    txt1: {
        fontSize: 20,
        color: 'white',
        marginTop: 10
    },
    txt6: {
        alignSelf: 'center',
        marginTop: 15
    },
    btn2:{
        marginTop:10,
        width: 350,
        height: 50,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:30,
        borderColor:'#646464',
        borderWidth:1
    },
    tinyLogo2: {
        marginTop: 10,
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginLeft: -238,
    },
    txt2: {
        fontSize: 23,
        alignSelf: 'center',
        marginTop: -31   
    },
    btn8: {
        marginTop: 10,
        marginLeft: 5,
    },
    txtinput2: {
        marginTop: 10
    },
})


// const styles = StyleSheet.create({
//     btn: {
//         marginTop: 20,
//         width: 300
//     },
//     constainer: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     input: {
//         width: 300,
//         marginTop: 15
//     },
//     label: {
//         marginBottom: 150,
//         marginTop: 50
//     }
//  })
