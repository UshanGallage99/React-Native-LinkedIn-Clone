import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Signin from '../components/Signin';
// import { Button } from 'react-native-paper';
// import ImagePicker from 'react-native-image-crop-picker';
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
        };
    }

    

    render() {
        const { navigate } = this.props.navigation;
        
        setTimeout(() => {
            navigate('Signin'); 
        }, 2000); 

        return (
            <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/Linkedin-Logo-White.png')}
                />      
                </View>    
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#000000',
        height : '100%',
    },
    container2 : {
        height : '75%', 
        transform : [{ scaleX : 2 }],
        borderBottomStartRadius : 350,
        borderBottomEndRadius : 350,
        overflow : 'hidden',
    },
    container3 : {
        flex : 1,
        transform : [{ scaleX : 0.5 }],
        backgroundColor: '#1D2226',
        alignItems : 'center',
        justifyContent : 'center'
    },
    tinyLogo: { 
        marginTop:180,
        width: 270,
        height: 70,
    },
})