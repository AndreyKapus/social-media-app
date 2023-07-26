import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from 'expo-camera';
import { useState, useEffect } from "react";
import * as Location from 'expo-location';

const CreateScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  const [hasPermission, setHasPermission] = useState(null);
  // const [cameraRef, setCameraRef] = useState(null);
 

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
      
      if (hasPermission === null) {
        return <Text>sadsadsa</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

  const sendPhoto =() => {
        navigation.navigate('DefaultScreen', {photo})
      };
  
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync()
    const location = await Location.getCurrentPositionAsync();
    console.log('location->', location)
    setPhoto(photo.uri);
  };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera} type={type}>
              {photo && 
              <View style={styles.takePhotoContainer}>
                <Image source={{uri: photo}} style={{ width: 200, height: 200}}/>
              </View>}
              <TouchableOpacity style={styles.snabBtn} onPress={takePhoto}>
                <Text style={styles.snapText}>SNAP</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.switchCamera} onPress={() => {
                setType(type === Camera.Constants.Type.back ?
                  Camera.Constants.Type.front: 
                  Camera.Constants.Type.back)
              }}>
                <Text style={styles.snapText}>switch</Text>
              </TouchableOpacity>
            </Camera>
            <TouchableOpacity style={styles.sendbBtn} onPress={sendPhoto}>
                <Text style={styles.sendText}>SEND</Text>
              </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    camera: {
      marginTop: 60,
      marginHorizontal: 2,
      height: '70%',
      alignItems: 'center',
      justifyContent: "flex-end"
    },

    snabBtn: {
      width: 70,
      height: 70,
      color: '#fff',
      marginBottom: 30,
      backgroundColor: '#ff0000',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: `#b22222`,
      borderWidth: 4,
      opacity: .9,
    },

    snapText: {
      color: '#fff'
    },

    takePhotoContainer: {
      position: 'absolute',
      borderWidth: 1,
      borderColor: '#ff0000',
      top: 50,
      left: 10,
    },

    sendbBtn: {
      marginHorizontal: 40,
      marginTop: 30,
      height: 50,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: `#1e90ff`,
      alignItems: 'center',
      justifyContent: "center",
    },

    sendText: {
      color: `#1e90ff`,
      fontSize: 20,
    },
    
    switchCamera: {
      width: 50,
      height: 50,
    }
  });

export default CreateScreen;