import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import { sizes } from '../../utils/theme/sizes';
import { colors } from '../../utils/theme/colors';

const NavigateLink = ({ href,navigation,children }: any) => {
    console.log('Href -> ', href);
    return (
        <TouchableOpacity onPress={() => navigation.navigate(href)}>
            {children}
        </TouchableOpacity>
    );
};

export default NavigateLink;

const styles = StyleSheet.create({
    link: {
        width: sizes.buttonWidth,
        height: sizes.buttonHeight,
        backgroundColor: colors.accentColor,
        borderRadius:sizes.borderRadius,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
});


