import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';


const AuthStack = createNativeStackNavigator()
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/fonst/RobotoSlab-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>  
        <AuthStack.Navigator initialRouteName='Login'>
          <AuthStack.Screen options={{headerShown: false}} name='Login' component={Login}/>
          <AuthStack.Screen options={{headerShown: false}} name='Register' component={Register}/>
        </AuthStack.Navigator>
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