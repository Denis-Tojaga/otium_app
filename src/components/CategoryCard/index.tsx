import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';


const CategoryCard = ({ item, index }: any) => {
    return (
        <View key={index} style={styles.container}>

        </View>
    );
};


export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        backgroundColor: '#F6F6F6',
        borderRadius: sizes.borderRadius,
        position: 'relative',
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
    }
});