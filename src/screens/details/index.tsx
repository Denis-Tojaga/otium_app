import * as React from 'react';
import { StyleSheet, View } from 'react-native';


const DetailsScreen = ({ navigation }: any) => {

    const itemID = navigation.getParam('itemID');
    console.log('Item id-> ', itemID);
    //TODO take the ID here and display all relevant information about the category

    return (
        <View>

        </View>
    );
};


export default DetailsScreen;


const styles = StyleSheet.create({

});

