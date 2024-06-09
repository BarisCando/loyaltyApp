import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import discoverIcon from '../../assets/images/Kesfet.png';
import starIcon from '../../assets/images/Katıldıklarım.png';

import Home from '../../screens/home/Home';

const WalletScreen = () => (
  <View style={styles.container}>
    <Text>Wallet Screen</Text>
  </View>
);

const CustomTabBarButton = () => (
  <View style={styles.customTabBarButtonContainer}>
    <Image
      style={{width: 69, height: 71}}
      source={require('../../assets/images/PORTAL.png')}
    />
  </View>
);

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = discoverIcon;
          } else if (route.name === 'Wallet') {
            iconName = starIcon;
          }

          return (
            <Image
              source={iconName}
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? 'black' : 'grey',
              }}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 9, fontWeight: '700'},
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{tabBarLabel: 'KEŞFET'}}
      />
      <Tab.Screen
        name=" "
        component={CustomTabBarButton} // Empty component for the center button
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/PORTAL.png')} // Replace with your icon URL
              style={styles.centerIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{tabBarLabel: 'DAHA CÜZDAN'}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    paddingBottom: 5,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    borderLeftWidth: 0.2,
    paddingHorizontal: 20,
    borderRightWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 11.0,
    elevation: 24,
  },
  customTabBarButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTabBarButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  centerIcon: {
    width: 69,
    height: 71,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
