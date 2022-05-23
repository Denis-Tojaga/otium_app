import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

const SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.page}>
            <Text>Signup</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>Go to signin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('homeFlow')}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'red',
    }
});

SignUpScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}

export default SignUpScreen;

