import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera';
import { useState } from "react";

const CreateScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');

  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  const takePhoto = async () => {
    
    const photo = await camera.takePictureAsync()
    // console.log('camera->', photo.uri)
    setPhoto(photo.uri);
  };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
              <TouchableOpacity style={styles.snabBtn} onPress={takePhoto}>
                <Text style={styles.snapText}>SNAP</Text>
              </TouchableOpacity>
            </Camera>
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
      height: 500,
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
  });

export default CreateScreen;