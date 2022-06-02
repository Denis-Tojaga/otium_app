import { useActor, useMachine } from '@xstate/react';
import * as React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../../api/categories';
import { MARKETPLACE } from '../../api/marketplace';
import CategoryCard from '../../components/CategoryCard';
import MarketplaceCard from '../../components/MarketplaceCard';
import { GlobalStateContext } from '../../context/GlobalStateProvider';
import { AuthenticationMachine } from '../../machines/AuthenticationMachine';
import { LocationMachine } from '../../machines/LocationMachine';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';



const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = height * 0.25 + 50;


const CategoryList = ({ handleCategoryNavigation }: any) => {
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
                        <CategoryCard item={item} index={index} handleClick={handleCategoryNavigation} />
                    </Animated.View>
                );
            }}
        />
    );
};


const MarketplaceList = () => {
    return (
        <View style={{ width: '100%', height: '75%', display: 'flex' }}>
            <FlatList
                style={{ width: '100%', height: '100%', paddingHorizontal: 15 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={MARKETPLACE}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }: any) => {
                    return <MarketplaceCard key={index} item={item} index={index} />
                }}
            />
            <Text style={{
                alignSelf: 'flex-end',
                marginRight: 10,
                fontFamily: 'TrendaSemibold',
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
                color: colors.accentColor
            }}>
                More
            </Text>
        </View>
    );
};

const HomeScreen = ({ navigation }: any) => {
    const handleCategoryNavigation = (id: any) => {
        console.log('ID u metodi -> ', id);
        navigation.navigate('Details', { itemID: id });
    };


    return (
        <View style={styles.page}>
            {/* Container holding the whole top header */}
            <View style={styles.header}>
                <View style={styles.headingContainer}>
                    {/* <Text>Hi {authContext.data.defaultAuth && authContext.data.defaultAuth.username}</Text> */}
                    <Text style={styles.title}>Hi Denis 👋</Text>
                    <Text style={styles.smallTitle}>Welcome to Mostar</Text>
                </View>
            </View>
            {/* Container holding the marketplace list */}
            <View style={styles.marketplaceContainer}>
                <Text style={styles.sectionLabel}>Marketplace</Text>
                {/* <ScrollView horizontal>
                    {MARKETPLACE.map(({ item, index }: any) => <MarketplaceCard item={item} index={index} />)}
                </ScrollView> */}
                {/* //TODO fix this */}
                <MarketplaceList />
            </View>


            {/* Container holding the categories list */}
            <View style={styles.categoriesContainer}>
                <Text style={styles.sectionLabel}>Adapt quickly</Text>
                <CategoryList handleCategoryNavigation={handleCategoryNavigation} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
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
        width: '100%',
        height: '20%',
        display: 'flex',
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