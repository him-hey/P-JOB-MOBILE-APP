import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        companyName:'',
        companyLogo:'',
        companyAddress:'',
        companyBackgroud:'',
        companyWebsite:'',
        employeeNumber:'',
    };
  }
  render() {
    return (
      <SafeAreaView style={{height:700, width:420, backgroundColor:'#372A28'}}>
          <View style={{height:550, width:410, backgroundColor:'#F8EFEF', borderBottomLeftRadius:60, borderBottomRightRadius:60}}>
            <Text style={{textAlign:'center', fontSize:30, marginTop:80, fontWeight:'bold'}}>Sign Up</Text>
            <TextInput
              value={this.state.companyName}
              onChangeText={(companyName) => this.setState({ companyName })}
              placeholder='Company Name'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.companyLogo}
              onChangeText={(companyLogo) => this.setState({ companyLogo })}
              placeholder='Company Logo'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.companyAddress}
              onChangeText={(companyAddress) => this.setState({ companyAddress })}
              placeholder='Company Address'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.companyBackgroud}
              onChangeText={(companyBackgroud) => this.setState({ companyBackgroud })}
              placeholder='Company Backgroud'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput>
            <TextInput
              value={this.state.companyWebsite}
              onChangeText={(companyWebsite) => this.setState({ companyWebsite })}
              placeholder='Company Website'
              style={{width:350, marginLeft:30, borderBottomWidth:1, borderBottomColor:'gray'}}
            ></TextInput> 
            <TextInput
              value={this.state.employeeNumber}
              onChangeText={(employeeNumber) => this.setState({ employeeNumber })}
              placeholder='Employee Number'
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


