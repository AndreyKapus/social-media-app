import { Text, View, StyleSheet } from "react-native";

const PostScreen = ({route}) => {
  console.log('route.params', route.params)
    return (
        <View style={styles.container}>
            <Text>Post Screen</Text>
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

export default PostScreen;