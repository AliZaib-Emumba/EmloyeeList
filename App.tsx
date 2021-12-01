/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listing from './screens/Listing/Listing';
import Profile from './screens/Profile/Profile';
import Blogs from './screens/Blogs/Blogs';
import Toast from "react-native-toast-message";
import {UserIdProvider} from './context/userIdProvider';
const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <UserIdProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Listing} />
          <Stack.Screen options={{ headerShown: true }} name="Profile" component={Profile} />
          <Stack.Screen options={{ headerShown: true }} name="Blogs" component={Blogs} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </UserIdProvider>
  );
};



export default App;
