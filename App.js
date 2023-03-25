import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { store } from './store'
import { Provider } from 'react-redux'
Platform.OS !== "web" && import("react-native-url-polyfill/auto")

import { NativeWindStyleSheet } from 'nativewind';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{ presentation: 'modal', headerShown: false }}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}


