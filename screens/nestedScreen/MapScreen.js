import { View, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}}
            initialRegion={{latitude: '', longitude: '', latitudeDelta: '', longitudeDelta: ''}}>
                <Marker coordinate={{latitude: '', longitude: ''}} title='travel photo'/>
            </MapView>
        </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  })
  
  export default MapScreen;