import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from './routes';
import Home from '../screens/home/Home';
import Happenning from '../screens/happenning/Happenning';
import More from '../screens/more/More';
import {tabScreenOptions} from './config';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <AntIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HAPPENNING}
        component={Happenning}
        options={{
          tabBarLabel: 'Đang diễn ra',
          tabBarIcon: ({color, size}) => (
            <AntIcon name="laptop" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MORE}
        component={More}
        options={{
          tabBarLabel: 'Thêm',
          tabBarIcon: ({color, size}) => (
            <AntIcon name="ellipsis1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
