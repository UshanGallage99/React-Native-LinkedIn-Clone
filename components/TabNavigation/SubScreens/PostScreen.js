import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      imageName: '',
      imageUrl: ''
    };
  }

  getimageFromGallery = () => {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {
                console.log(image);
                this.setState({
                    imagePath: image.path
                }) 
                this.setState({
                    imageName: image.modificationDate
                })
    
                // this.UploadImage()
            });
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
        <ScrollView >
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
            numberOfLines={5}
            placeholder= 'What do you want to talk about?'
            style={styles.txt2}/>
          {/* <Image
            style={styles.img2}
            source={require('../SubScreens/user.png')}
          /> */}
          </View> 
        </ScrollView>

        <View style={styles.viewbottom}> 
        <TouchableOpacity onPress={() => this.RBSheet.open()}>
        <AwesomeIcon style={styles.cameraicn} name="camera"  color={'#666666'} size={22}/>
        <AwesomeIcon style={styles.videoicn} name="video"  color={'#666666'} size={22}/>
        <AwesomeIcon style={styles.imageicn} name="image"  color={'#666666'} size={22}/>
        <FeatherIcon style={styles.moreicn}  name="more-horizontal"  color={'#666666'} size={22} />
        <AwesomeIcon style={styles.commenticn} name="comment"  color={'#666666'} size={18}/> 
        <Text style={styles.anyonetwo}>
          Anyone
        </Text>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={430}
          openDuration={250}
          closeOnDragDown= 'true'
          customStyles={{
            container: {
              // justifyContent: "center",
              // alignItems: "center"
            }
          }}
        >
        <TouchableOpacity onPress={this.getimageFromGallery}>   
        <View style={{ 
            flexDirection: "row",
            paddingTop: 18,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,   
        }}>
          
          <AwesomeIcon name="image"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Add a photo</Text>   
        </View>
        </TouchableOpacity>

        <View style={{
          // marginLeft:5,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10, 
        }}>
          <AwesomeIcon name="video"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Take a video</Text>    
        </View>
        <View style={{
          // marginLeft:40,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,   
        }}>
          <AwesomeIcon name="certificate"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Celebrate an occasion</Text>    
        </View>
        <View style={{
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,   
        }}>
          <AwesomeIcon name="file-alt"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Add a document</Text>    
        </View>
        <View style={{
          // marginLeft:5,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,
        }}>
          <AwesomeIcon name="briefcase"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Share that you're hiring</Text>    
        </View>
        <View style={{
          // marginLeft:1,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,  
        }}>
          <AwesomeIcon name="stamp"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Find an expert</Text>    
        </View>
        <View style={{
          // marginLeft:1,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,   
        }}>
          <AwesomeIcon name="chart-bar"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Create a poll</Text>    
        </View>
        <View style={{ 
            // marginLeft:1,
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 12,
            paddingLeft: 8,
            paddingRight: 10,
              
        }}>
          <AwesomeIcon name="calendar"  color={'#666666'} size={22}/>
            <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>  Create an event</Text>    
        </View>
        </RBSheet>
        </TouchableOpacity> 
        </View>
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
      viewbottom:{
        backgroundColor:'#FFFFFF',
        height:51,
      },
      view1:{
        marginTop:18,
        backgroundColor:'#FFFFFF',
        height:760,
      },
      img1:{
          marginTop:13,
          marginLeft:12    
      },
      cameraicn:{
        marginTop:13,
        marginLeft:12    
      },
      videoicn:{
        marginTop:-22,
        marginLeft:60    
      },
      imageicn:{
        marginTop:-23,
        marginLeft:110    
      },
      moreicn:{
        marginTop:-24,
        marginLeft:160    
      },
      commenticn:{
        marginTop:-19,
        marginLeft:325    
      },
      anyonetwo:{
        fontSize:13,
        marginTop:-19,
        marginLeft:350  
      },
      public:{
        marginTop:6,
        marginLeft:67 ,
        borderWidth: 2,
        borderColor: "#666666",  
        width: 100,
        height: 23,
        borderRadius: 25
      },
      worldicn:{
        marginTop:1,
        marginLeft:2,
      },
      anyone:{
        fontSize:15,
        marginTop:-19,
        marginLeft:20  
      },

      arrowicn:{
        marginTop:-18,
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
        marginLeft:72,
        marginTop:-45,
        fontSize:15,
        color:'#202124',
      },
      img2:{
        marginTop:15,
        width: '100%',
        height: 410,
        alignSelf:'center'
        
      },
      txt2:{
        marginLeft:12,
        marginRight:10,
        marginTop:22,
        fontSize:15,
        color:'#202124',
        height:100, 
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