import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator()
const MainTab = createBottomTabNavigator();

import Login from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';
import PostScreen from './screens/main/PostScreen';
import CreateScreen from './screens/main/CreateScreen';
import ProfileScreen from './screens/main/ProfileScreen';

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

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
   <MainTab.Navigator screenOptions={{showLabel: false}}>
      <MainTab.Screen name='Post' component={PostScreen} options={{headerShown: false,
        tabBarIcon: ({focused, size, color}) => (<MaterialIcons name="post-add" size={30} color={color} />)}}/>
      <MainTab.Screen name='Create' component={CreateScreen} options={{headerShown: false,
        tabBarIcon: ({focused, size, color}) => (<MaterialIcons name="create" size={35} color={color} />)}}/>
      <MainTab.Screen name='Profile' component={ProfileScreen} options={{headerShown: false,
        tabBarIcon: ({focused, size, color}) => (<AntDesign name="profile" size={24} color={color} />)}}/>
    </MainTab.Navigator>
  )
    }