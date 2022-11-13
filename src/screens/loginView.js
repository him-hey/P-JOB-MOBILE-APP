import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { TapGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import ButtonComponent from '../components/ButtonComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      role: '',
    };
  }
  
  render() {
    return (
      <SafeAreaView style={{height:700, width:420, backgroundColor:'#F8EFEF'}}>
          <View style={{height:550, width:415, backgroundColor:'#372A28', borderBottomLeftRadius:60, borderBottomRightRadius:60}}>
            <Image
              style={{height:130, width:390, margin:15, marginTop:40}}
              source={require('../assets/img/logo.jpg')}
            />
            <Text style={{ color:'white',fontSize:20, marginLeft:25, marginTop:5}}>Email</Text>
            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder='Enter your email'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'white'}}
            ></TextInput>
            <Text style={{ color:'white',fontSize:20, marginLeft:25, marginTop:3}}>Password</Text>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder='Enter your password'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'white'}}
            ></TextInput>
            <Text style={{ color:'white',fontSize:20, marginLeft:25, marginTop:5}}>Role</Text>
             <TextInput
              value={this.state.role}
              onChangeText={(role) => this.setState({ role })}
              placeholder='Choose your role'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'white'}}
            ></TextInput>
            <ButtonComponent>
              <Text>Sign In</Text>
            </ButtonComponent>
          </View>
          <View>
            <Text style={{margin:50, fontSize:18, color:'black'}}>Don't an account?</Text>
          </View>
      </SafeAreaView>
    );
  }
}



