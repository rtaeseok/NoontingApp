import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Profile from './Profile';
// import Request from './Request';

const Tab = createBottomTabNavigator();

function MenuTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="홈" component={Home} />
      {/* <Tab.Screen name="신청목록" component={Request} /> */}
      <Tab.Screen name="대화" component={Chat} />
      <Tab.Screen name="프로필" component={Profile} />
    </Tab.Navigator>
  );
}

export default MenuTab;
