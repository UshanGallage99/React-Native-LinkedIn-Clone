import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

export default class Firestore extends Component {
    constructor(props){
        super();
        this.state = {
            name:'',
            address:'',
            salary:''
        };
    }

    saveCustomer = () =>{
        firestore()
            .collection('customers')
            .add({
                name: this.state.name,
                address: this.state.address,
                salary: this.state.salary
            })
            .then(() => {
                console.log('User added!');
                this.setState({
                    name:'',
                    address:'',
                    salary:''
                })
            });
    }

    updateCustomer = () =>{
        firestore()
        .collection('customers')
        .doc('Mjjuy4zPhKUhkx3CCHr3')
        .update({
            name: this.state.name,
            address: this.state.address,
            salary: this.state.salary
        })
        .then(() => {
          console.log('User updated!');
          this.setState({
            name:'',
            address:'',
            salary:''
            })
        });    
    }
    deleteCustomer = () =>{
        firestore()
        .collection('customers')
        .doc('dtXMy5OS3C33tljtxN9x')
        .delete()
        .then(() => {
            console.log('User deleted!');
            this.setState({
                name:'',
                address:'',
                salary:''
                })
        });    
    }

    render() {
        return (
            <View>
                <Text style={styles.label}> Customer Section </Text>
                <TextInput
                style={styles.input}
                    label="Enter Your Name"
                    value={this.state.name}
                    onChangeText={text => this.setState(
                        {name: text}
                    )}/>
                    <TextInput
                style={styles.input}
                    label="Enter Your Address"
                    value={this.state.address}
                    onChangeText={text => this.setState(
                        {address: text}
                    )}/>
                <TextInput
                style={styles.input}
                    label="Enter Your salary"
                    value={this.state.salary}
                    onChangeText={text => this.setState(
                        {salary: text}
                    )}/>
                <Button style={styles.btn} mode="contained" onPress={this.saveCustomer}>
                    Save Customer
                </Button>
                <Button style={styles.btn} mode="contained" onPress={this.updateCustomer}>
                    Update Customer
                </Button>
                <Button style={styles.btn} mode="contained" onPress={this.deleteCustomer}>
                    Delete Customer
                </Button>
                 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        width: 300
    },
    constainer: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: 300,
        marginTop: 15
    },
    label: {
        marginBottom: 150,
        marginTop: 50
    }
})
