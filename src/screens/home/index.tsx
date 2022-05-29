import { useMachine } from '@xstate/react';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthenticationMachine } from '../../machines/AuthenticationMachine';
import { LocationMachine } from '../../machines/LocationMachine';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';

const HomeScreen = () => {
    const [authenticationMachine, sendAuthenticationMachineEvent] = useMachine(AuthenticationMachine);
    const [locationMachine, sendLocationMachineEvent] = useMachine(LocationMachine);
    const { context: authContext } = authenticationMachine;
    const { context: locationContext } = locationMachine;

    return (
        <View style={styles.page}>
            {/* Container holding the whole top header */}
            <View style={styles.header}>
                <View style={styles.headingContainer}>
                    {/* <Text>Hi {authContext.data.defaultAuth && authContext.data.defaultAuth.username}</Text> */}
                    <Text style={styles.title}>Hi Denis 👋</Text>
                    <Text style={styles.smallTitle}>Welcome to Stockholm  </Text>
                </View>
            </View>
            {/* Container holding the marketplace list */}
            <View style={styles.marketplaceContainer}>
                <Text style={styles.sectionLabel}>Marketplace</Text>

            </View>


            {/* Container holding the categories list */}
            <View style={styles.categoriesContainer}>
                <Text style={styles.sectionLabel}>Adapt quickly</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.screenBackground
    },
    header: {
        width: '100%',
        height: '26%',
        backgroundColor: colors.darkBlueBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    headingContainer: {
        width: '70%',
        height: '45%',
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'TrendaSemibold',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    smallTitle: {
        fontFamily: 'TrendaSemibold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    sectionLabel: {
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'TrendaSemibold',
        color: 'black'
    },
    marketplaceContainer: {
        borderWidth: 2,
        width: '100%',
        height: '15%',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column'
    },
    categoriesContainer: {
        borderWidth: 2,
        width: '100%',
        height: '60%',
        backgroundColor: 'blue',
        display: 'flex',
    },
});

HomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}

export default HomeScreen;