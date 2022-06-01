import * as React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizes } from '../../utils/theme/sizes';

const MarketplaceCard = ({ item, index }: any) => {

    const renderIllustration = () => {
        switch (item.image) {
            case 'bike':
                return <Image style={styles.image} source={require('../../../assets/images/static/bike.png')} />;
            case 'car':
                return <Image style={styles.image} source={require('../../../assets/images/static/car.png')} />;
            case 'diapers':
                return <Image style={styles.image} source={require('../../../assets/images/static/diapers.png')} />;
            case 'hoodie':
                return <Image style={styles.image} source={require('../../../assets/images/static/hoodie.png')} />;
            case 'kitchen_supplies':
                return <Image style={styles.image} source={require('../../../assets/images/static/kitchen_supplies.png')} />;
            case 'shirts':
                return <Image style={styles.image} source={require('../../../assets/images/static/shirts.png')} />;
            default:
                break;
        };
    };

    return (
        <View key={index} style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Functionality to collect items from marketplace is in progress, it will be available soon...')}>
                {renderIllustration()}
            </TouchableOpacity>
        </View>
    );
};


export default MarketplaceCard;


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 80,
        borderRadius: sizes.borderRadius,
        backgroundColor: 'white',
        marginRight: 10,
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .2,
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: sizes.borderRadius,
    },
    imageContainer: {

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    }
});