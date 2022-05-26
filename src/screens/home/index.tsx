import { useMachine } from '@xstate/react';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthenticationMachine } from '../../machines/AuthenticationMachine';
import { colors } from '../../utils/theme/colors';

const HomeScreen = () => {
    const [authenticationMachine, sendAuthenticationMachineEvent] = useMachine(AuthenticationMachine);
    const { context: authContext } = authenticationMachine;

    console.log('Auth machine ', authContext);

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headingContainer}>
                    <Text>Hi {authContext.data.defaultAuth && authContext.data.defaultAuth.username}</Text>
                    <Text></Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '30%',
        backgroundColor: colors.accentColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    headingContainer: {
        borderWidth: 2,
        width: '65%',
        height: '45%',
        marginTop: 40
    }
});

HomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}

export default HomeScreen;