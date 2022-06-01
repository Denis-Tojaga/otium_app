import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { JOBS } from '../../api/jobs';
import Accordion from '../../components/Accordion';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';
import { staticStrings } from '../../utils/theme/staticStrings';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const JobsScreen = () => {

    const [searchText, setSearchText] = React.useState<string>('');

    return (
        <View style={styles.page}>
            <View style={styles.searchContainer}>
                <View style={styles.smallSearchContainer}>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.inputField}
                        placeholder={staticStrings.jobs.searchInputPlaceholder}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="search1" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={styles.listContainer}
                data={JOBS}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <Accordion key={index} item={item} index={index} />
                    );
                }}
            />
        </View>
    );
};

export default JobsScreen;


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    searchContainer: {
        width: '100%',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallSearchContainer: {
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.borderRadius,
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    iconContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: sizes.borderRadius,
        marginRight: 10,
    },
    listContainer: {
        width: '100%',
        height: '70%',
        paddingHorizontal: 25,
        paddingTop: 30
    },
    inputField: {
        width: '85%',
        height: sizes.inputFieldHeight,
        padding: sizes.inputPadding,
        borderRadius: sizes.borderRadius,
        fontFamily: 'TrendaRegular',
        backgroundColor: 'white'
    }
});