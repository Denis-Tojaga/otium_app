import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { HOUSING } from '../../api/housing';
import { sizes } from '../../utils/theme/sizes';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../utils/theme/colors';


const DetailsScreen = ({ navigation }: any) => {
    const [housingUnits, setHousingUnits] = React.useState(HOUSING);

    console.log('EE', housingUnits)

    return (
        <View style={styles.page}>
            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={HOUSING}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }: any) => {
                    console.log('*****')
                    return <View style={styles.itemContainer}>
                        <View style={styles.itemContainerSectionOne}>
                            <Entypo name="location" size={24} color="black" />
                            <Text style={styles.locationLabel}>{item.location}</Text>
                        </View>
                        <View style={styles.itemContainerSectionTwo}>
                            <Text style={styles.itemContainerTitle}>{item.title}</Text>
                            <Text style={styles.itemContainerDescription}>{item.description}</Text>
                            <View style={styles.capacityContainer}>
                                <Text style={styles.itemContainerCapacityLabel}>Capacity:</Text>
                                <Text style={styles.itemContainerCapacityValue}>{item.availability} persons</Text>
                            </View>
                        </View>
                        <View style={styles.itemContainerSectionThree}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Apply</Text>
                                <AntDesign name="enter" size={24} color="white" />
                            </View>
                        </View>
                    </View>
                }}
            />
        </View>
    );
};


export default DetailsScreen;


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        display: 'flex',
    },
    flatList: {
        width: '100%',
        height: '95%',
        paddingVertical: '2.5%',
        display: 'flex',
        position: 'relative'
    },
    itemContainer: {
        width: '90%',
        height: 400,
        marginHorizontal: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        shadowOffset: { width: 0, height: 5, },
        shadowColor: 'black',
        shadowOpacity: .4,
        borderRadius: sizes.borderRadius,
        display: 'flex',

    },
    itemContainerSectionOne: {
        width: '90%',
        height: '20%',
        marginVertical: 5,
        marginHorizontal: '5%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    locationLabel: {
        fontFamily: 'TrendaSemibold',
        fontSize: 15,
    },
    itemContainerSectionTwo: {
        width: '90%',
        height: '55%',
        marginVertical: 5,
        marginHorizontal: '5%',
        display: 'flex',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    itemContainerTitle: {
        fontFamily: 'TrendaSemibold',
        fontSize: 30,
        textAlign: 'center'
    },
    itemContainerDescription: {
        fontFamily: 'TrendaRegular',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 15
    },
    capacityContainer: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemContainerCapacityLabel: {
        fontFamily: 'TrendaSemibold',
        fontSize: 16,
        marginTop: 15
    },
    itemContainerCapacityValue: {
        fontFamily: 'TrendaSemibold',
        fontSize: 25,
        marginTop: 15
    },
    itemContainerSectionThree: {
        width: '90%',
        height: '15%',
        marginVertical: 5,
        marginHorizontal: '5%',
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '45%',
        height: '90%',
        backgroundColor: colors.accentColor,
        alignSelf: 'flex-end',
        borderRadius: sizes.borderRadius,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'TrendaSemibold',
        fontSize: 20,
        color: 'white'
    }
});

