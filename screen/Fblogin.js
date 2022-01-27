import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export default class Fblogin extends React.Component {
    
    onFacebookButtonPress = async () => {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
                "email",
                "public_profile",
                "user_friends"
            ]);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential).then(() => console.log(auth().currentUser.displayName));
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity
                    style={{ backgroundColor: 'blue', width: '70%', height: 35, borderRadius: 3, alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => this.onFacebookButtonPress()}
                >
                    <Text style={{ color: 'white' }}>Sign In With Facebook</Text>
                </TouchableOpacity>

            </View>
        )
    }
}