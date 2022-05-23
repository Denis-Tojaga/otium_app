import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import { sizes } from '../../utils/theme/sizes';
import { colors } from '../../utils/theme/colors';

const CustomButton = ({ text, handleClick }: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: sizes.buttonWidth,
        height: sizes.buttonHeight,
        backgroundColor: colors.accentColor,
        borderRadius:sizes.borderRadius,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'TrendaSemibold'
    }
});


