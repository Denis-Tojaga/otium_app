import * as React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CATEGORIES } from '../../api/categories';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';


const CategoryCard = ({ item, index, handleClick }: any) => {

    const renderIllustration = () => {
        switch (item.illustration) {
            case 'culture':
                return <Image style={styles.illustration} source={require('../../../assets/images/illustrations/culture.png')} />;
            case 'card':
                return <Image style={styles.illustration} source={require('../../../assets/images/illustrations/card.png')} />;
            case 'housing':
                return <Image style={styles.illustration} source={require('../../../assets/images/illustrations/housing.png')} />;
            case 'language':
                return <Image style={styles.illustration} source={require('../../../assets/images/illustrations/language.png')} />;
            default:
                break;
        };
    };

    return (
        <TouchableOpacity style={styles.parent} onPress={() => item.id == '3' ? handleClick(item.id) : Alert.alert('Work is in progress...')}>
            <View key={index} style={styles.container}>
                {/* Description container */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.smallDescription}>{item.smallDescription}</Text>
                </View>

                {/* Illustration container */}
                <View style={styles.illustrationContainer}>
                    {renderIllustration()}
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default CategoryCard;

const styles = StyleSheet.create({
    parent: {
        width: '100%',
        height: '95%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: sizes.borderRadius,
        position: 'relative',
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
        display: 'flex',
        flexDirection: 'row',
    },
    descriptionContainer: {
        display: 'flex',
        width: '70%',
        height: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'TrendaSemibold',
        fontSize: 24,
        color: 'black',
        textAlign: 'left',
        letterSpacing: .2,
    },
    smallDescription: {
        fontFamily: 'TrendaLight',
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        letterSpacing: .2,
        marginTop: 20
    },
    illustrationContainer: {
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    illustration: {
        width: 100,
        height: 100,
    }
});