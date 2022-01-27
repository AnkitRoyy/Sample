import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Profile extends React.Component {
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDAnKbzUVsxHYB-fIRa2xv3OM0RJ-1qY9E',
                    language: 'en',
                }}
            />
        )
    }
}