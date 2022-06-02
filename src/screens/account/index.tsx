import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { sizes } from '../../utils/theme/sizes';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../utils/theme/colors';
import { Entypo } from '@expo/vector-icons';


const AccountScreen = () => {
    return (
        <SafeAreaProvider style={styles.page}>
            <View style={styles.topContainer}>
                <View style={styles.imageHolder}>
                    <Image style={styles.profilePicture} source={require('../../../assets/images/static/profilePicture.png')} />
                    <View style={styles.plusIcon}>
                        <AntDesign name="plus" size={18} color="white" />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.label}>Account overview</Text>
                <TouchableOpacity style={styles.tab} onPress={() => Alert.alert('Work is in progress...')}>
                    <View style={styles.tabLeftContainer}>
                        <Text style={styles.tabLabel}>My profile</Text>
                    </View>
                    <Entypo name="chevron-right" style={styles.icon} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => Alert.alert('Work is in progress...')}>
                    <View style={styles.tabLeftContainer}>
                        <Text style={styles.tabLabel}>My location</Text>
                    </View>
                    <Entypo name="chevron-right" style={styles.icon} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => Alert.alert('Work is in progress...')}>
                    <View style={styles.tabLeftContainer}>
                        <Text style={styles.tabLabel}>eID card</Text>
                    </View>
                    <Entypo name="chevron-right" style={styles.icon} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => Alert.alert('Work is in progress...')}>
                    <View style={styles.tabLeftContainer}>
                        <Text style={styles.tabLabel}>Change password</Text>
                    </View>
                    <Entypo name="chevron-right" style={styles.icon} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
}

export default AccountScreen;


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    topContainer: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageHolder: {
        width: '35%',
        height: '45%',
        borderRadius: 16,
        backgroundColor: 'white',
        marginBottom: 50,
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    profilePicture: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    plusIcon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        position: 'absolute',
        bottom: -5,
        right: -10,
        backgroundColor: colors.accentColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        backgroundColor: colors.darkBlueBackground,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        paddingTop: 10
    },
    label: {
        alignSelf: 'flex-start',
        fontFamily: 'TrendaSemibold',
        fontSize: 20,
        marginBottom: 20,
        color: 'white'
    },
    tab: {
        width: '100%',
        height: '15%',
        backgroundColor: 'white',
        borderRadius: sizes.borderRadius,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tabLeftContainer: {
        width: '75%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    icon: {
        fontSize: 28,
        color: colors.darkBlueBackground
    },
    tabLabel: {
        fontFamily: 'TrendaRegular',
        fontSize: 20,
        color: 'black'
    }
});