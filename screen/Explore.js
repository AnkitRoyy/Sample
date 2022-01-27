import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import auth from '@react-native-firebase/auth';

export default class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation = require('@react-native-community/geolocation');
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                    error: null,
                })
            }, error => this.setState({ error: error }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        );
        
        auth().signInWithEmailAndPassword('test@test.com', '123456').then(()=> console.log(auth().currentUser))
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker coordinate={this.state} />
                </MapView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});