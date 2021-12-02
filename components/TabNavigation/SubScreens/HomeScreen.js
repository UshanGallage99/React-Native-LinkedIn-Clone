import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchQuery:''
    };
  }

  onChangeSearch(query) {
    setSearchQuery(query);
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
        <AwesomeIcon style={styles.icon1}  name="comment-dots"  color={'#666666'} size={30} />
        </View>
        <ScrollView>
          <View style={styles.view1}>
          <Image
          style={styles.img1}
          source={require('../SubScreens/user.png')} 
          />
          <Text style={styles.txt1}>User User</Text>
          <Text style={styles.txt2}>samplesample samplesample samplesample samplesample sample samplesample sample</Text>
          <Image
          style={styles.img2}
          source={require('../SubScreens/banner1.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
          </View>
          <Image
          style={styles.like}
          source={require('../SubScreens/like.png')} 
          />
          <Image
          style={styles.comment}
          source={require('../SubScreens/comments.png')} 
          />
          <Image
          style={styles.share}
          source={require('../SubScreens/share.png')} 
          />
          <Image
          style={styles.send}
          source={require('../SubScreens/send.png')} 
          /> 
          </View>
          <View style={styles.view1}>
          <Image
          style={styles.img1}
          source={require('../SubScreens/user.png')} 
          />
          <Text style={styles.txt1}>User User</Text>
          <Text style={styles.txt2}>samplesample samplesample samplesample samplesample sample samplesample sample</Text>
          <Image
          style={styles.img2}
          source={require('../SubScreens/banner1.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
          </View>
          <Image
          style={styles.like}
          source={require('../SubScreens/like.png')} 
          />
          <Image
          style={styles.comment}
          source={require('../SubScreens/comments.png')} 
          />
          <Image
          style={styles.share}
          source={require('../SubScreens/share.png')} 
          />
          <Image
          style={styles.send}
          source={require('../SubScreens/send.png')} 
          /> 
          </View>
          <View style={styles.view1}>
          <Image
          style={styles.img1}
          source={require('../SubScreens/user.png')} 
          />
          <Text style={styles.txt1}>User User</Text>
          <Text style={styles.txt2}>samplesample samplesample samplesample samplesample sample samplesample sample</Text>
          <Image
          style={styles.img2}
          source={require('../SubScreens/banner1.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
          </View>
          <Image
          style={styles.like}
          source={require('../SubScreens/like.png')} 
          />
          <Image
          style={styles.comment}
          source={require('../SubScreens/comments.png')} 
          />
          <Image
          style={styles.share}
          source={require('../SubScreens/share.png')} 
          />
          <Image
          style={styles.send}
          source={require('../SubScreens/send.png')} 
          /> 
          </View>
          <View style={styles.view1}>
          <Image
          style={styles.img1}
          source={require('../SubScreens/user.png')} 
          />
          <Text style={styles.txt1}>User User</Text>
          <Text style={styles.txt2}>samplesample samplesample samplesample samplesample sample samplesample sample</Text>
          <Image
          style={styles.img2}
          source={require('../SubScreens/banner1.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.3, backgroundColor: '#D3D3D3'}}/>
          </View>
          <Image
          style={styles.like}
          source={require('../SubScreens/like.png')} 
          />
          <Image
          style={styles.comment}
          source={require('../SubScreens/comments.png')} 
          />
          <Image
          style={styles.share}
          source={require('../SubScreens/share.png')} 
          />
          <Image
          style={styles.send}
          source={require('../SubScreens/send.png')} 
          /> 
          </View>
          
        </ScrollView>
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
      like:{
        marginTop:10,
        marginLeft:30,
        width:20,
        height:20
      },
      comment:{
        marginTop:-22,
        marginLeft:130,
        width:20,
        height:20
      },
      share:{
        marginTop:-20,
        marginLeft:250,
        width:20,
        height:20
      },
      send:{
        marginTop:-17,
        marginLeft:350,
        width:20,
        height:20
      },
      searchbar:{
          width:280,
          height: 40,
          marginLeft:60,
          marginTop:-34
      },
      icon1:{
         marginLeft:360,
         marginTop:-37,
          
      },
      txt1:{
        marginLeft:50,
        marginTop:-30,
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
        marginLeft:15,
        marginRight:10,
        marginTop:20,
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
})