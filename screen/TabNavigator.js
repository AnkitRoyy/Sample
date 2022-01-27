import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './Explore';
import SavedData from './SavedData';
import { View, Image, Text, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#0741bb',
                    height: '10.8%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 15,
                    position : 'absolute',
                    bottom: 0,
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff',
            }}

        >
            <Tab.Screen name='Explore' component={Explore} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../images/explore.png')}
                            style={{ width: focused ? 33 : 25, height: focused ? 33 : 25, marginTop: focused ? 5 : 0 }}
                        />
                        {focused && (
                            <Text style={{ color: '#fff' }}>Explore</Text>
                        )
                        }
                    </View>
                )
            }}
            />
            <Tab.Screen name='Saved' component={SavedData} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../images/bookmark.png')}
                            style={{ width: focused ? 29 : 25, height: focused ? 29 : 25, marginTop: focused ? 5 : 0 }}
                        />
                        {focused && (
                            <Text style={{ color: '#fff' }}>Saved Data</Text>
                        )
                        }
                    </View>
                )
            }}

            />

        </Tab.Navigator>

    )
}

export default TabNavigator;