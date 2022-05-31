import { useMachine } from '@xstate/react';
import * as React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../../api/categories';
import CategoryCard from '../../components/CategoryCard';
import { AuthenticationMachine } from '../../machines/AuthenticationMachine';
import { LocationMachine } from '../../machines/LocationMachine';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';



const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = height * 0.25 + 50;


const CategoryList = () => {
    //animation managing
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <Animated.FlatList
            style={{ width: '100%', height: '100%', paddingHorizontal: 18 }}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            data={CATEGORIES}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {

                /*  FlatList Animation Reference code */
                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 1)
                ]
                const opacityInputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 1)
                ]
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0]
                })
                const opacity = scrollY.interpolate({
                    inputRange: opacityInputRange,
                    outputRange: [1, 1, 1, 0]
                })
                /*  FlatList Animation Reference code */

                /* Category card */
                return (
                    <Animated.View style={{ display: 'flex', alignContent: 'center', width: width * .9, height: height * 0.25, transform: [{ scale }], opacity }}>
                        <CategoryCard item={item} index={index} />
                    </Animated.View>
                );
            }}
        />
    );
}

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

                <CategoryList />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '20%',
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
        marginTop: 20,
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
        color: 'black',
        marginBottom: 5,
        marginLeft: sizes.generalMargin
    },
    marketplaceContainer: {
        borderWidth: 2,
        width: '100%',
        height: '17%',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    categoriesContainer: {
        width: '100%',
        height: '60%',
        display: 'flex',
    }
});

HomeScreen.navigationOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "white" }
}

export default HomeScreen;