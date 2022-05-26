import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import CustomButton from '../../components/CustomButton';
import NavigateLink from '../../components/NavigateLink';
import { colors } from '../../utils/theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useMachine } from '@xstate/react';

import { sizes } from '../../utils/theme/sizes';
import { staticStrings } from '../../utils/theme/staticStrings';
import { AuthenticationMachine } from '../../machines/AuthenticationMachine';

const SignInScreen = ({ navigation }) => {
    const [authenticationMachine, sendAuthenticationMachineEvent] = useMachine(AuthenticationMachine);
    const { context: authContext } = authenticationMachine;
    const [email_username_phone, setEmail_username_phone] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<boolean>(false);
    const validation = () => email_username_phone != '' && password != '';
    const checkSocialAuth = () => email_username_phone == '' && password == '';

    const handleNavigation = () => {
        if (!checkSocialAuth() && validation()) {
            error && setError(false);
            const data = {
                socialAuth: null,
                defaultAuth: {
                    email_username_phone: email_username_phone,
                    password: password
                }
            };
            sendAuthenticationMachineEvent({ type: 'authenticate', data: data });
            navigation.navigate('mapFlow');
        } else {
            setError(true);
            console.log('Either auth or errors')
        }
    };

    return (
        <SafeAreaView style={styles.page}>
            {/* Logo holder */}
            <View style={styles.logoContainer}>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{staticStrings.signin.name}</Text>
                <Text style={styles.welcomeMessage}>{staticStrings.signin.welcomeMessage}</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    {/* Input fields */}
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.inputField}
                        placeholder={staticStrings.signin.email_phone_username_placeholder}
                        value={email_username_phone}
                        onChange={(e: any) => setEmail_username_phone(e.target.value)}
                    />
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.inputField}
                        placeholder={staticStrings.signin.password_placeholder}
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    {error && <Text style={styles.errorLabel}>{staticStrings.signin.error}</Text>}
                    <View>
                        {/* Divider */}
                        <View
                            style={{
                                width: 300,
                                borderBottomColor: colors.screenBackground,
                                borderBottomWidth: 1,
                                marginTop: 30
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 12,
                                color: colors.fontColor,
                                fontFamily: 'TrendaSemibold',
                                letterSpacing: 3,
                                marginTop: 5,
                                width: 300,
                                textAlign: 'center'
                            }}
                        >OR</Text>
                        {/* Auth buttons */}
                        <View style={styles.authButtonsContainer}>
                            <TouchableOpacity style={styles.authButton}>
                                <AntDesign name="google" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.authButton}>
                                <AntDesign name="apple1" size={24} color="white" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        width: '85%',
                        paddingHorizontal: sizes.generalMargin,
                        marginBottom: 10
                    }}>
                        <Text style={{ fontFamily: 'TrendaRegular', fontSize: 16 }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ fontFamily: 'TrendaSemibold', fontSize: 16, fontWeight: '900', marginLeft: 10 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton text={staticStrings.signin.buttonText} handleClick={handleNavigation} />
                </View>
            </View>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 35
    },
    logoContainer: {
        width: '100%',
        height: '25%',
        backgroundColor: 'blue',
        padding: sizes.generalMargin
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '20%',
        padding: sizes.generalMargin
    },
    title: {
        fontSize: sizes.appNameFontSize,
        fontWeight: '800',
        color: colors.fontColor,
        fontFamily: 'TrendaSemibold',
        letterSpacing: 3
    },
    welcomeMessage: {
        fontSize: sizes.titleFontSize,
        fontWeight: '800',
        color: colors.fontColor,
        fontFamily: 'TrendaRegular',
        letterSpacing: 3
    },
    errorLabel: {
        fontFamily: 'TrendaLight',
        fontSize: 14,
        color: 'red',
        marginTop: 10,
        textAlign: 'center'
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '50%',
        paddingHorizontal: sizes.generalMargin,
    },
    authButtonsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: sizes.generalMargin,
    },
    authButton: {
        borderRadius: 50,
        width: 45,
        height: 45,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        width: sizes.buttonWidth,
        height: sizes.inputFieldHeight,
        borderWidth: 1,
        padding: sizes.inputPadding,
        borderColor: colors.borderColor,
        borderRadius: sizes.borderRadius,
        fontFamily: 'TrendaRegular',
        marginTop: 12
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '35%'
    }
});



SignInScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}

export default SignInScreen;