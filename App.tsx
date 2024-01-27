import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';
import Request from './Screens/Request';
import {NavigationContainer} from '@react-navigation/native';
import MenuTab from './Screens/MenuTab';
import Store from './Screens/Store';
import ProfileInfo from './Screens/ProfileInfo';
import Test from './Screens/Test';
import EditProfile from './Screens/EditProfile';
import ReceivedRequest from './Screens/ReceivedRequest';
import SentRequest from './Screens/SentRequest';
import Start from './Screens/Start';
import Nickname from './Screens/Nickname';
import Birth from './Screens/Birth';
import BasicInfo1 from './Screens/BasicInfo1';
import BasicInfo2 from './Screens/BasicInfo2';
import ProfilePicture from './Screens/ProfilePicture';
import AllowPhone from './Screens/AllowPhone';
import AllowNotification from './Screens/AllowNotification';
import SignUpEnd from './Screens/SignUpEnd';
import ReceivedHeart from './Screens/ReceivedHeart';
import Gender from './Screens/Gender';
import Email from './Screens/Email';
import EmailVerify from './Screens/EmailVerify';

import Axios from 'axios';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    // Example GET request
    Axios.get('http://172.30.1.45/8080/api/v1')
      .then(response => {
        console.log('Data received:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="MenuTab"
          component={MenuTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUpEnd"
          component={SignUpEnd}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Store"
          component={Store}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ReceivedHeart"
          component={ReceivedHeart}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfileInfo"
          component={ProfileInfo}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Gender"
          component={Gender}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Request"
          component={Request}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Start"
          component={Start}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfilePicture"
          component={ProfilePicture}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EmailVerify"
          component={EmailVerify}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AllowPhone"
          component={AllowPhone}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AllowNotification"
          component={AllowNotification}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Nickname"
          component={Nickname}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BasicInfo1"
          component={BasicInfo1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BasicInfo2"
          component={BasicInfo2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Birth"
          component={Birth}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Email"
          component={Email}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Test"
          component={Test}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ReceivedRequest"
          component={ReceivedRequest}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SentRequest"
          component={SentRequest}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
