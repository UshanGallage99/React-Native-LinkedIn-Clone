// import React, { Component } from 'react';
// import { View, Text, Image } from 'react-native';
// import { Button } from 'react-native-paper';
// import ImagePicker from 'react-native-image-crop-picker';
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';

// export default class Upload extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imagePath: '',
//             imageName: '',
//             imageUrl: ''
             
//         };
//     }

//     getimageFromGallery = () => {
//         ImagePicker.openPicker({
//             width: 300,
//             height: 400,
//             cropping: true
//         }).then(image => {
//             // console.log(image);
//             this.setState({
//                 imagePath: image.path
//             })

//             this.setState({
//                 imageName: image.modificationDate
//             })

//             this.UploadImage()
//         });
//     }

    
     

//     UploadImage = async () => {
//         const fileName = this.state.imageName + ".jpg";
//         const reference = storage().ref(`images/${fileName}`);
//         await reference.putFile(this.state.imagePath);
//         const url = await storage().ref(`images/${fileName}`).getDownloadURL();
//         console.log(url);
//     }
     
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>File Upload </Text>
//                 <Button style={{ width: 200, marginTop: 50 }} mode="contained" onPress={this.getimageFromGallery}>
//                     Press me
//                 </Button>
                 
//                 <Image
//                  resizeMode='contain'
//                  style={{
//                  width: 20, 
//                  //position: 'absolute',
//                 //  top:10,
//                  }}
//                   source={require('../assets/Linkedin-Logo.png')}/>
           
//             </View>
//         );
//     }
// }

import React, { Component } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default class Upload extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >   
        </RBSheet>
      </View>
    );
  }
}