import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { useMachine } from '@xstate/react';
import { LocationMachine } from '../../machines/LocationMachine';
import { sizes } from '../../utils/theme/sizes';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { staticStrings } from '../../utils/theme/staticStrings';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../utils/theme/colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const MapScreen = ({ navigation }: any) => {
    const [errMessage, setErrMessage] = React.useState<string>('');
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [locationMachine, sendLocationMachineEvent] = useMachine(LocationMachine);
    const { context: locationContext } = locationMachine;
    const markerCoords = locationContext.data && { latitude: locationContext.data.latitude, longitude: locationContext.data.longitude };
    const GOOGLE_PLACES_API_KEY = 'AIzaSyAKiz598aqQJZlI-Fp1omjuBxgln3SBXoA';

    const getCityAndAddress = async (latitude: any, longitude: any) => {
        let response = await Location.reverseGeocodeAsync({ latitude, longitude });
        const city = response && response[0].city;
        const address = response && response[0].street;
        return address + ', ' + city;
    }
    const askForLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrMessage('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const { coords: { latitude, longitude } } = location;

        const metaData = await getCityAndAddress(latitude, longitude);
        sendLocationMachineEvent({ type: 'load', data: { latitude, longitude, latitudeDelta: 1, longitudeDelta: 1, metaData: metaData } });
    };
    const handleMapPress = async (event: any) => {
        const { coordinate: { latitude, longitude } } = event.nativeEvent;
        const metaData = await getCityAndAddress(latitude, longitude);
        sendLocationMachineEvent({
            type: 'update',
            data: { latitude: latitude, longitude: longitude, latitudeDelta: 1, longitudeDelta: 1, metaData: metaData }
        });
    };
    const handlePlaceClick = async (data: any) => {
        const response = await Location.geocodeAsync(data.description);
        const { latitude, longitude } = response && response[0];
        sendLocationMachineEvent({
            type: 'update',
            data: { latitude: latitude, longitude: longitude, latitudeDelta: 1, longitudeDelta: 1, metaData: data.description }
        });
    };

    const handleNavigate = () => {
        navigation.navigate('bottomTabFlow');
    }

    React.useEffect(() => {
        askForLocationPermission();
    }, []);

    return (
        <SafeAreaProvider style={styles.page}>
            <View style={styles.map}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchInput}>
                        <GooglePlacesAutocomplete
                            styles={{ alignSelf: 'flex-start' }}
                            placeholder={staticStrings.map.searchInputPlaceholder}
                            query={{
                                key: GOOGLE_PLACES_API_KEY,
                                language: 'en', // language of the results
                            }}
                            onPress={(data, details = null) => handlePlaceClick(data)}
                            onFail={(error) => console.error(error)}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleNavigate}>
                        <Text style={styles.buttonText}>{staticStrings.map.confirmButton}</Text>
                    </TouchableOpacity>
                </View>
                <MapView
                    style={styles.mapView}
                    region={locationContext.data}
                    onPress={handleMapPress}
                >
                    {locationContext.data && <Marker coordinate={markerCoords} />}
                </MapView>
            </View>
        </SafeAreaProvider>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: 'red',
    },
    map: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
    },
    mapView: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    searchContainer: {
        width: '100%',
        position: 'absolute',
        top: 70,
        left: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: sizes.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        shadowOffset: { width: 2, height: 6, },
        shadowColor: 'black',
        shadowOpacity: .4,
    },
    buttonContainer: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom: 80,
        left: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmButton: {
        width: 350,
        height: '80%',
        backgroundColor: 'black',
        borderRadius: sizes.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'TrendaRegular',
        fontSize: sizes.fontSize,
        letterSpacing: 2,
        color: 'white'
    }
});


export default MapScreen;