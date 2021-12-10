import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import firestore from '@react-native-firebase/firestore';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const subscriber = firestore()
        .collection('customers')
        .onSnapshot(querySnapshot => {
            const customers = [];
            // console.log(customers);

            querySnapshot.forEach(documentSnapshot => {
                customers.push({
                    name: documentSnapshot.data().name,
                    desc: documentSnapshot.data().desc,
                    date: documentSnapshot.data().date,
                    imageUrl: documentSnapshot.data().imageUrl,
                    key: documentSnapshot.id,
                });
            });

            this.setState({
                data: customers
            })
             
        });
}

   
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
        <Image
        style={styles.img1}
        source={require('../SubScreens/user.png')} 
        />
       
        <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={this.onChangeSearch}
        value={this.state.searchQuery} 
        />   
        <AwesomeIcon style={styles.icon1}  name="comment-dots"  color={'#666666'} size={25} />
        </View>
        <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.view1}>
          <Image
          style={styles.userimg}
          source={require('../SubScreens/user.png')} 
          />
          <View style ={{ 
            marginTop:-14, 
            marginLeft:6,
          }}>
          <Text style={styles.txt1}>{item.name}</Text>
          <Text style ={{
            marginLeft:53,
            marginTop:0,
            fontSize:12,
            color:'#666666',
          }}>1,800 followers</Text>
          <Text style ={{
            marginLeft:53,
            marginTop:0,
            fontSize:12,
            color:'#666666',
          }}>{item.date}</Text>
          <AwesomeIcon style={styles.worldicn} name="globe-americas"  color={'#666666'} size={12}/>
          </View>
          <FeatherIcon style={styles.icon2}  name="more-vertical"  color={'#666666'} size={21} />
          <Text style={styles.txt2}> {item.desc}</Text>
          <Image
          style={styles.img2}
          source={{uri:item.imageUrl}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
          </View>
          <AwesomeIcon
          style={styles.like}  name="thumbs-up" color={'#666666'} size={21}         
          />
          <AwesomeIcon
          style={styles.comment}
          name="comment" color={'#666666'} size={21}
          />
          <AwesomeIcon
          style={styles.share}
          name="share-square" color={'#666666'} size={21}
          />
          <AwesomeIcon
          style={styles.send}
          name="paper-plane" color={'#666666'} size={21}
          /> 
          </View>
         )}
         keyExtractor={(item) => {
             item.key
         }}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E9E5DF',
        color:'#FEFEFE',
        // paddingTop: StatusBar.currentHeight,
      },
      view:{
        backgroundColor:'#FFFFFF',
        height:51
      },
      view1:{
        marginTop:18,
        backgroundColor:'#FFFFFF',
        height:460
      },
      img1:{
          marginTop:10,
          marginLeft:10,
          width:30,
          height:30
      },
      userimg:{
        marginTop:15,
        marginLeft:10,
        width:42,
        height:42
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
      searchbar:{
          backgroundColor: '#EEF3F7',
          width:295,
          height: 40,
          marginLeft:60,
          marginTop:-35
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
        marginTop:-40,
         
     },
      txt1:{
        marginLeft:53,
        marginTop:-33,
        fontSize:15,
        color:'#202124',
      },
      txt3:{
        // marginLeft:53,
        // marginTop:-33,
        fontSize:10,
        color:'#202124',
      },
      img2:{
        marginTop:10,
        width: '100%',
        height:'70%',
        alignSelf:'center'
      },
      txt2:{
        marginLeft:10,
        marginRight:10,
        marginTop:30,
        fontSize:13,
        color:'#202124',
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
    worldicn:{
      marginTop:-15,
      marginLeft:125,
    },
})