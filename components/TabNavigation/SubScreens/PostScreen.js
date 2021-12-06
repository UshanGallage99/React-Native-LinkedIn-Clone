import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>

        <TouchableOpacity onPress={this.props.navigation.navigate('TabScreen')}>
          <AwesomeIcon style={styles.img1} name="times"  color={'#666666'} size={25}/>
        </TouchableOpacity>

        <Text style={styles.sharepost}>
          Share post
        </Text>

        <Text style={styles.post}>
           post
        </Text>  
        </View>
        <ScrollView>
          <View style={styles.view1}>
          <Image
          style={styles.userimg}
          source={require('../SubScreens/user.png')} 
          />
          <Text style={styles.txt1}>User User</Text>
          <View style={styles.public}>
          <AwesomeIcon style={styles.worldicn} name="globe-americas"  color={'#666666'} size={15}/>
          <Text style={styles.anyone}>
          Anyone
          </Text>
          <AwesomeIcon style={styles.arrowicn} name="caret-down"  color={'#666666'} size={15}/>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder= 'What do you want to talk about?'
            style={styles.txt2}/>
          </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        color:'#FEFEFE',
        // paddingTop: StatusBar.currentHeight,
      },
      view:{
        backgroundColor:'#FFFFFF',
        height:51,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
      },
      view1:{
        marginTop:18,
        backgroundColor:'#FFFFFF',
        height:460
      },
      img1:{
          marginTop:13,
          marginLeft:12    
      },
      public:{
        marginTop:6,
        marginLeft:62,
        borderWidth: 1,
        borderColor: "#666666",  
        width: 100,
        // height: 20,
        borderRadius: 10
      },
      worldicn:{
        marginLeft:2,
      },
      anyone:{
        fontSize:15,
        marginTop:-20,
        marginLeft:20  
      },
      arrowicn:{
        marginTop:-17,
        marginLeft:80
    },
      userimg:{
        marginTop:5,
        marginLeft:15,
        width:45,
        height:45
      },
      like:{
        marginTop:8,
        marginLeft:30,
        
      },
      comment:{
        marginTop:-23,
        marginLeft:135,
       
      },
      share:{
        marginTop:-23,
        marginLeft:250,
         
      },
      send:{
        marginTop:-20,
        marginLeft:350,
         
      },
      sharepost:{
          color: 'black',
          fontSize: 20,
          marginLeft:50,
          marginTop:-28
      },
      post:{
        color: '#666666',
        fontSize: 17,
        marginLeft:360,
        marginTop:-25
      },
      qr:{
         marginLeft:330,
         marginTop:-35,
          
      },
      icon1:{
         marginLeft:375,
         marginTop:-35,
          
      },
      icon2:{
        marginLeft:380,
        marginTop:-20,
         
     },
      txt1:{
        marginLeft:65,
        marginTop:-45,
        fontSize:15,
        color:'#202124',
      },
      img2:{
        marginTop:10,
        width: '100%',
        height:'70%',
        alignSelf:'center'
      },
      txt2:{
        marginLeft:12,
        marginRight:10,
        marginTop:22,
        fontSize:15,
        color:'#202124',
        height:200, 
        textAlignVertical: 'top',
      },
      btn1:{
        marginTop:10,
        backgroundColor:'#0A66C2',
        width: 310,
        height: 40,
        alignSelf:'center',
        borderRadius:30
      },
      txt3:{
        fontSize:17,
        color:'white'
    },
})