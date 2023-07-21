import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/fonst/RobotoSlab-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>  
        <Stack.Navigator initialRouteName='Login'>
          {/* <Stack.Screen name='login' component={Login}/> */}
          <Stack.Screen name='Register' component={Register}/>
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