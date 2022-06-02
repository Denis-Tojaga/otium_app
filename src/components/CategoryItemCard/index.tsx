import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryItemCard = ({ item, index }: any) => {
    return (
        <View style={styles.container}>
            <Text>EE</Text>
        </View>
    );
};


export default CategoryItemCard;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: 'black',
    }
});