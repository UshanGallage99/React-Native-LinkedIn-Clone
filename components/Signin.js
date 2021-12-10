import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
 


GoogleSignin.configure({
    webClientId: '630653283925-8dq96en0hbmc1knqf8aqiq7j8phldlsj.apps.googleusercontent.com',
});

export default class Signin extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    clearText = () => {
        this.setState({ email: '' })
        this.setState({ password: '' })
    }
  
    userLogin = () => {
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user);
                this.clearText();
                console.log('User loged in!'); 
                AsyncStorage.setItem('name', user.displayName);
                this.props.navigation.navigate('TabScreen')  
            })
            .catch(error => {
                Alert.alert('Please check your email & password !')
                console.log('Login unsuccessfull !');
            });
    }
    onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        console.log((await user).user);
        console.log('User loged in!'); 
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
                <TouchableOpacity onPress={() => navigate('Signup', { name: 'Signup' })}>
                    <Text style={styles.txt3}>
                        Join now
                    </Text>
                </TouchableOpacity>
                <Text style={styles.txt5}>
                    Sign in
                </Text>
                <Text>
                {"\n"}
                </Text>
                <Input
                    placeholder="Email or Phone"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        { email: text }
                    )} />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        { password: text }
                    )} />
                <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.txt4}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                <Text>
                {"\n"}
                </Text>
                <Button style={styles.btn1}   
                    onPress={this.userLogin}>
                    <Text style={styles.txt1}>
                        Continue   
                    </Text>
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
                 
                <TouchableOpacity style={styles.btn2}   
                     onPress={this.onGoogleButtonPress}> 
                    <Image style={styles.tinyLogo2}
                        source={require('../assets/google-logo.png')}
                    />
                    <Text style={styles.txt2}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}   
                    onPress={() => this.showMenu()}>
                    <Image style={styles.tinyLogo2}
                         source={require('../assets/apple-logo.png')}
                    />
                    <Text style={styles.txt2}>Sign in with Apple</Text>
                </TouchableOpacity>
                 
                {/* <Button style={styles.btn} mode="contained" onPress={this.userLogin}>
                    LogIn
                </Button>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.onGoogleButtonPress}
                /> */}

            </View>
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
    tinyLogo2: {
        marginTop:10,
        width: 30,
        height: 30,
        alignSelf:'center',
        marginLeft:-238,
    },
    txt1:{
        fontSize:20,
        color:'white'
    },
    txt2:{
        fontSize:23,
        alignSelf:'center',
        marginTop:-31,
    },
    txt3:{
        fontSize:15,
        alignSelf:'center',
        color:'#0A66C2',
        marginTop:-20,
        marginLeft:330
    },
    txt4:{
        fontSize:16,
        alignSelf:'center',
        color:'#0A66C2'
    },
    txt5:{
        fontSize:35, 
        color:'#202124',
        marginTop:20,
        marginLeft:5
    },
    btn1:{
        marginTop:10,
        backgroundColor:'#0A66C2',
        width: 350,
        height: 50,
        alignSelf:'center',
        borderRadius:30
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
    btn3:{
        marginTop:15,
        width:150,
        height:25,
    },
     
})

