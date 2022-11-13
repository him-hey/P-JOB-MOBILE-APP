import React, { SafeAreaView, ScrollView } from 'react-native';
import CategoryComponent from '../components/CategoriesComponent';
import SearchComponent from '../components/SearchComponent';
import RecentPostComponent from '../components/RecentPostComponent';
import JobRecommendComponent from '../components/JobRecommendComponent';
import { StyleSheet } from 'react-native';
export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SearchComponent/>
                <CategoryComponent/>
                <RecentPostComponent/>
                <JobRecommendComponent/>
            </ScrollView>
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
})