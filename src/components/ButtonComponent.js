import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default props => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View
        style={[
          styles.container,
          props.color && {backgroundColor: props.color},
        ]}
        >
        <Text style={styles.label}>{props.children}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#312321',
    margin: 120,
    marginTop:100,
    borderRadius: 10,
    
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
