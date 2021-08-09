import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WearablesPage from './pages/Wearables';
import ProfilePage from './pages/Profile';
import HelpPage from './pages/Help';

import {CategoryIcon, FaceIcon, HelpOutlineIcon} from './assets/svgs';

const Tab = createBottomTabNavigator();

const App = () => {
  /* const screenOptions = ({route}) => ({
    tabBarIcon: () => {
      switch (route.name) {
        case 'Wearables':
          return <CategoryIcon fill={'#000000'} />;
        case 'Profile':
          return <FaceIcon />;
        case 'Help':
          return <HelpOutlineIcon />;
        default:
          return null;
      }
    },
    tabBarActiveTintColor: '#000000',
    tabBarInactiveTintColor: '#707070',
    tabBarLabelStyle: {
      fontSize: 15,
    },
  }); */

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            switch (route.name) {
              case 'Wearables':
                return <CategoryIcon fill={'#000000'} />;
              case 'Profile':
                return <FaceIcon />;
              case 'Help':
                return <HelpOutlineIcon />;
              default:
                return null;
            }
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#707070',
          tabBarStyle: {
            height: 100,
          },
          tabBarIconStyle: {
            marginBottom: -16,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 36,
            fontFamily: 'Roboto-Regular',
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Wearables" component={WearablesPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Help" component={HelpPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
