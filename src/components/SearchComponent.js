import React from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { StyleSheet, View,TextInput, Text } from 'react-native';
export default function SearchComponent(){
  return(
    <View>
        <Text style={styles.titlesTitle}>Find the best jobs for you here!</Text>
        <TextInput placeholder="Search" style={styles.item}/>
        {/* <Icon name="rocket" style={{ fontSize: 25 }}/> */}
    </View>
      
  );
}
const styles = StyleSheet.create({
    item: {
        margin: 5,
        height: 50,
        backgroundColor: '#c0c0c0',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
        color: '#fff',
    },
    titlesTitle: {
        margin: 5,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 5,
      },
});