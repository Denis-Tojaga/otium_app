import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>SignInScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text>Go to signUp</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignInScreen;