import React from 'react-native';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';

const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third',
      },
  ];
  
export default function JobRecommendComponent(){
    const Item = ({ title,image }) => (
        <View style={styles.item}>
          <Text style={styles.image}>{image}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return(
        <View>
            <Text style={styles.title}>Job Recommend</Text>
            <ScrollView>
                <FlatList style={styles.container}
                    horizontal 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                >
                </FlatList>
                
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#c0c0c0',
      padding: 100,
      borderRadius: 5,
      marginHorizontal: 8,
    },
    itemName: {

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
    },

  });