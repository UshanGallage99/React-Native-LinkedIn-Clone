import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

export default class MyNetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const subscriber = firestore()
        .collection('networks')
        .onSnapshot(querySnapshot => {
            const networks = [];
            // console.log(customers);

            querySnapshot.forEach(documentSnapshot => {
              networks.push({
                    name: documentSnapshot.data().name,
                    institute: documentSnapshot.data().institute,
                    position: documentSnapshot.data().position,
                    key: documentSnapshot.id,
                });
            });

            this.setState({
                data: networks
            })
             
        });
}

  render() {
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
        <TouchableOpacity>
        <Text style={styles.txt1}>Manage my network</Text>
        <AwesomeIcon style={styles.icon2}  name="chevron-right" color={'#666666'} size={18} />
        </TouchableOpacity>
        </View>
       
      <View style={styles.view2}>
      <TouchableOpacity>
        <Text style={styles.txt2}>Invitations</Text>
        <AwesomeIcon style={styles.icon2}  name="chevron-right" color={'#666666'} size={18} />
      </TouchableOpacity>
      <Text>       
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
      </View>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
      <View style={styles.view3}>
      <Image
      style={styles.img2}
      source={require('../SubScreens/user.png')}
      />
      <Text style={styles.txt3}>{item.name}</Text>
      <Text style={styles.txt4}>{item.position}</Text>
      <Text style={styles.txt5}>{item.institute}</Text>
      <AwesomeIcon style={styles.icon3}  name="building" color={'#666666'}  />
      <TouchableOpacity style={styles.btn1}><AwesomeIcon style={styles.icon4} name="times-circle" color={'#0A66C2'} size={38} /></TouchableOpacity>
      <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon5} name="check-circle"  color={'#666666'} size={38} /></TouchableOpacity>
      </View>
      )}
         keyExtractor={(item) => {
             item.key
         }}
       /> 
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
      </View>
      
      </View>
       
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#E9E5DF',
      color:'#FEFEFE',
    },
    view:{
      backgroundColor:'#FFFFFF',
      height:106
    },
    img1:{
      marginTop:10,
      marginLeft:10,
      width:30,
      height:30
  },
  searchbar:{
    backgroundColor: '#EEF3F7',
    width:295,
    height: 40,
    marginLeft:60,
    marginTop:-35
  },
    icon1:{
      marginLeft:375,
      marginTop:-35, 
    },
    txt1:{
      fontSize:17,
      color:'#0A66C2',
      marginLeft:15,
      marginTop:30
    },
    view1:{
      marginTop:18,
      backgroundColor:'#FFFFFF',
      height:55
    },
    icon2:{
      marginLeft:380,
      marginTop:-18
    },
    view2:{
      marginTop:10,
      backgroundColor:'#FFFFFF',
      height:225
    },
    txt2:{
      fontSize:17,
      color:'#0A66C2',
      marginLeft:15,
      marginTop:17
    },
    view3:{
      marginTop:5,
      backgroundColor:'#ffffff',
      height:85
    },
    img2:{
      marginTop:10,
        marginLeft:10,
        width:60,
        height:60
    },
    txt3:{
      fontSize:17,
      color:'#232325',
      marginLeft:77,
      marginTop:-62
    },
    txt4:{
      marginLeft:77
    },
    txt5:{
      marginLeft:94
    },
    icon3:{
      marginLeft:77,
      marginTop:-15,
    },
    btn1:{
      
      width:40,
      height:40,
      marginLeft:308,
      marginTop:-45,
      borderRadius:100,
    },
    icon4:{
      alignSelf:'center',
      // marginTop:20
    },
    btn2:{
     
      width:40,
      height:40,
      marginLeft:350,
      marginTop:-40,
      borderRadius:100,
    },
    icon5:{
      alignSelf:'center',
       
    },
    view4:{
      marginTop:10,
      backgroundColor:'#FFFFFF',
      height:225
    },
    txt6:{
      marginTop:7,
      color:'#1B1B1B',
      fontSize:17,
      marginLeft:17
    }
})