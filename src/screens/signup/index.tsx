import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Signup</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>Go to signin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('homeFlow')}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});


export default SignUpScreen;

