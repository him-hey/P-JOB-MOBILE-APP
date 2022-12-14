import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      dateofbirth: '',
      email: '',
      password: '',
    };
  }

  
  render() {
    return (
      <SafeAreaView style={{height:700, width:420, backgroundColor:'#372A28'}}>
          <View style={{height:550, width:410, backgroundColor:'#F8EFEF', borderBottomLeftRadius:60, borderBottomRightRadius:60}}>
            <Text style={{textAlign:'center', fontSize:30, marginTop:80, fontWeight:'bold'}}>Sign Up</Text>
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
              value={this.state.dateofbirth}
              onChangeText={(dateofbirth) => this.setState({ dateofbirth })}
              placeholder='Date Of Birth'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput> 
            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder='Email'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <ButtonComponent>
            <Text>Sign Up</Text>
            </ButtonComponent>
          </View>
      </SafeAreaView>
    );
  }
}


