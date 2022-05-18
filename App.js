import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './src/navigators/MainTabNavigator';
import {COLOR} from './src/utils';

const App = () => {
  return (
    <>
    <SafeAreaView style={{backgroundColor: COLOR.dark, flex: 0}}/>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
