
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { store } from './Src/redux/store'; 
import SplashScreenComponent from './Src/components/SplashScreen';
import HomeScreen from './Src/screens/HomeScreen';
import ProductScreen from './Src/screens/ProductScreen';
import Cart from './Src/components/Cart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreenComponent} />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerShown: true,
              title: 'Welcome', 
              headerStyle: {
                backgroundColor: '#1E3C72',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
          <Stack.Screen 
            name="Products" 
            component={ProductScreen}
            options={{ 
              headerShown: true, 
              title: 'Our Products',
              headerStyle: {
                backgroundColor: '#2A5298',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen 
            name="Cart" 
            component={Cart}
            options={{ 
              headerShown: true, 
              title: 'Your Cart',
              headerStyle: {
                backgroundColor: '#4A00E0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
