import React from 'react';
import HomePage from './components/HomePage';
import Curriculo from './components/Curriculo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Currículo"
          component={Curriculo}
          options={{
            headerStyle: {
              // backgroundColor: '#f4511e',
            },
          }}
        />
        <Stack.Screen name="Gerador" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}