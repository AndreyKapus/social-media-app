import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator()
const MainTab = createBottomTabNavigator();

import Login from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';
import PostScreen from './screens/main/PostScreen';
import CreateScreen from './screens/main/CreateScreen';
import ProfileScreen from './screens/main/ProfileScreen';

export const useRoute = (isAuth) => {
  if(!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen options={{headerShown: false}} name='Login' component={Login}/>
        <AuthStack.Screen options={{headerShown: false}} name='Register' component={Register}/>
      </AuthStack.Navigator>
    )
  };
   return (
   <MainTab.Navigator tabBarOptions={{showLabel: false}}>
      <MainTab.Screen name='Post' component={PostScreen}/>
      <MainTab.Screen name='Create' component={CreateScreen}/>
      <MainTab.Screen name='Profile' component={ProfileScreen}/>
    </MainTab.Navigator>
  )
    }