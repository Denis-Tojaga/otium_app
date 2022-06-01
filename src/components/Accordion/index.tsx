import * as React from 'react';
import {
    Alert,
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';
import { Entypo } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ item, index }: any) => {

    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    const handlePress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    console.log('Item org -> ', item.organisation);

    return (
        <TouchableOpacity style={!isExpanded ? styles.notExpandedContainer : styles.expandedContainer} onPress={handlePress} >
            <View style={styles.accordionContainer}>
                <View style={styles.defaultContent}>
                    <View>
                        <Text style={styles.jobTitle}>{item.title}</Text>
                        <Text style={styles.postedAtLabel}>Posted at: {item.postedAt}</Text>
                    </View>
                    {!isExpanded ? <Entypo style={{ alignSelf: 'center' }} name="chevron-down" size={35} color={colors.accentColor} /> : <Entypo style={{ alignSelf: 'center' }} name="chevron-up" size={35} color={colors.accentColor} />}
                </View>
                {
                    isExpanded &&
                    <View style={styles.expandedContent}>
                        <View style={styles.expandedSection}>
                            <Text style={styles.jobDescriptionLabel}>Description</Text>
                            <Text style={styles.jobDescription}>{item.smallDescription}</Text>
                        </View>

                        <View style={styles.expandedSection}>
                            <Text style={styles.jobDescriptionLabel}>Skills</Text>
                            <Text style={styles.jobDescription}>
                                {item.skills}
                            </Text>
                        </View>

                        <View style={styles.expandedSection}>
                            <Text style={styles.jobDescriptionLabel}>Organisation</Text>
                            <Text style={styles.jobDescription}> {item.organisation}</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.applyButton} onPress={() => Alert.alert('Work in progress, you will be able to apply soon...')}>
                                <Text style={styles.buttonText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};


export default Accordion;


const styles = StyleSheet.create({
    notExpandedContainer: {
        width: '100%',
        height: 90,
        marginBottom: 20,
        borderRadius: sizes.borderRadius,
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    expandedContainer: {
        width: '100%',
        height: 470,
        marginBottom: 20,
        borderRadius: sizes.borderRadius,
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    accordionContainer: {
        display: 'flex',
        padding: 15,
        width: '100%',
        backgroundColor: 'white',
        height: '100%',
        borderRadius: sizes.borderRadius,
        borderWidth: .2
    },
    defaultContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'TrendaSemibold',
        color: 'black',
    },
    postedAtLabel: {
        fontSize: 12,
        marginTop: 15,
        fontWeight: '500',
        fontFamily: 'TrendaRegular',
        color: colors.placeholderText,
    },
    expandedContent: {
        width: '100%',
        height: 300,
        marginTop: 10,
        display: 'flex',
    },
    jobDescriptionLabel: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'TrendaSemibold',
        color: 'black',
    },
    jobDescription: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'TrendaRegular',
        color: 'black',
    },
    expandedSection: {
        width: '100%',
        height: '30%',
        marginTop: 20,
    },
    applyButton: {
        width: 90,
        height: 40,
        backgroundColor: colors.accentColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.borderRadius,
        alignSelf: 'flex-end',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: 'TrendaSemibold',
        color: 'black',
    }
});