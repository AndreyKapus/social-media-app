import { Text, View, StyleSheet } from "react-native";

const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Create Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CreateScreen;