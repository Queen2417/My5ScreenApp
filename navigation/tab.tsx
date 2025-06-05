import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FetchDataScreen from '../screens/FetchDataScreen';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, color }: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome name={name} size={24} color={color} />;
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: React.ComponentProps<typeof FontAwesome>['name'];

          switch (route.name) {
            case 'Welcome':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            case 'Fetch':
              iconName = 'download';
              break;
            case 'List':
              iconName = 'list';
              break;
            case 'Map':
              iconName = 'map-marker';
              break;
            default:
              iconName = 'circle';
          }

          return <TabBarIcon name={iconName} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Tab.Screen name="Fetch" component={FetchDataScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}
