import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera';

const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
              <TouchableOpacity style={styles.snabBtn}>
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