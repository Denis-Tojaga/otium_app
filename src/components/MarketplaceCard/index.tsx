import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizes } from '../../utils/theme/sizes';

const MarketplaceCard = ({ item, index }: any) => {
    return (
        <TouchableOpacity key={index} style={styles.container}>
            <View style={styles.imageContainer}>
            </View>
        </TouchableOpacity>
    );
};


export default MarketplaceCard;


const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '90%',
        borderRadius: sizes.borderRadius
    },
    imageContainer: {

    }
});