import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../nestedScreen/DefaultScreen';
import CommentsScreen from '../nestedScreen/CommentsScreen';
import MapScreen from '../nestedScreen/MapScreen';

const NestedScreen = createStackNavigator()

const PostScreen = () => {
  return (
    <NestedScreen.Navigator>
    <NestedScreen.Screen name='DefaultScreen' component={DefaultScreen}/>
    <NestedScreen.Screen name='Comments' component={CommentsScreen}/>
    <NestedScreen.Screen name='Map' component={MapScreen}/>
  </NestedScreen.Navigator>
  )
};

export default PostScreen;