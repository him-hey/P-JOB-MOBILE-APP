import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      status: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{height:700, width:420, backgroundColor:'brown'}}>
          <View style={{height:550, width:410, backgroundColor:'#F8EFEF', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <Text style={{textAlign:'center', fontSize:20, marginTop:20}}>Sign Up</Text>
            <TextInput
              value={this.state.firstname}
              onChangeText={(firstname) => this.setState({ firstname })}
              placeholder='Firstname'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.lastname}
              onChangeText={(lastname) => this.setState({ lastname })}
              placeholder='Lastname'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder='Password'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.phone}
              onChangeText={(phone) => this.setState({ phone })}
              placeholder='Phone'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.status}
              onChangeText={(status) => this.setState({ status })}
              placeholder='Status'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder='Email'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
          </View>
      </SafeAreaView>
    );
  }
}
