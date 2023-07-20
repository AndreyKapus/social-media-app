import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './app/screens/Login';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>  
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

{/* <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/> */}