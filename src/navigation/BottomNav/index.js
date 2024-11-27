import { Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeeklyReport from '../../screens/Report';
import Home from '../../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';


const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: height * 0.08 },
                headerStyle: {

                    borderBottomColor: 'gray',
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',

                tabBarLabelStyle: {
                    fontSize: width * 0.035,


                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo

                            name="home"
                            size={25}
                            color={color}
                            style={styles.bottomTabIcon}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="WeeklyReport"
                component={WeeklyReport}
                options={{
                    title: 'Weekly Report',
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo
                            name="pie-chart"
                            size={25}
                            color={color}
                            style={styles.bottomTabIcon}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomNav;
