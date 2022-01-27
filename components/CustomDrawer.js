import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>

                <View>
                    <Text style={{ fontSize: 24, color: '#0741bb', fontWeight: '700', marginLeft: 17, textShadowRadius: 6, textShadowOffset: { width: 1, height: 2 }, marginBottom: 20 }}>AccuRide</Text>

                    <View style={{ width: 130, height: 130, borderRadius: 100, alignSelf: 'center', borderColor: '#ffffff', borderWidth: 2, elevation: 15 }}>
                        <Image
                            source={require('../profile.jpeg')}
                            style={{ borderRadius: 100, width: '100%', height: '100%', }}
                        />
                    </View>

                    <Text style={{ color: '#0741bb', fontWeight: '600', fontSize: 16, alignSelf: 'center', marginTop: 10, textShadowRadius: 2, textShadowOffset: { width: 1, height: 1 } }}>John Doe</Text>
                </View>

                <View style={{ paddingTop: 15 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ borderTopWidth: 1, borderColor: '#e5e5e5', paddingHorizontal: 20, paddingVertical: 13  }}>

                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                >
                    <Image
                        source={require('../images/logout.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={{ color: '#0741bb', marginLeft: 13, fontWeight : '700' }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;