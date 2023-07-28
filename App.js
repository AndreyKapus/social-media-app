import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Provider} from 'react-redux'
import { useRoute } from './router';
import { store } from './redux/store'

export default function App() {
  const routing = useRoute(false)
  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/fonst/RobotoSlab-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </Provider>
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
