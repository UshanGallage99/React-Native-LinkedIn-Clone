import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Signup from './Signup';
import Signin from './Signin';
import Firestore from './Firestore';
import Loadall from './Loadall';
import Upload from './Upload';
import AppNavigator from './AppNavigator';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (  
      <AppNavigator/>
    )
  }
}
