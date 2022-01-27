import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: ''
        }
    }

    chooseImage = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({
                imageUrl: image.path
            });

            console.log(this.state.imageUrl);
            if (this.state.imageUrl) {
                this.sendImage();
            }
        });
    }

    sendImage = async () => {
        const imageUrl = this.state.imageUrl;
        let filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;

        const storageRef = storage().ref(`${auth().currentUser.uid+'('+auth().currentUser.displayName+')'}/images/${filename}`).putFile(imageUrl);

        try {
            await storageRef;

            const imageUri = await storage().ref(`${auth().currentUser.uid+'('+auth().currentUser.displayName+')'}/images/${filename}`).getDownloadURL();

            console.log(imageUri);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.chooseImage()}
                >
                    <Text>Upload a photo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}