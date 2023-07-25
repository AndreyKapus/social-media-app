import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const PostScreen = ({route}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(route.params) {
      setPosts(prevPosts => [...prevPosts, route.params.photo])
    }
  }, [route.params]);

  console.log(posts)

    return (
        <View style={styles.container}>
            <FlatList data={posts}
              keyExtractor={(item, idx) => idx.toString()}
              renderItem={({item}) => (
                <View style={styles.imageContainer}>
                  <Image source={{uri: item}} style={styles.photo}/>
                </View>
            )}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      justifyContent: 'center',
    },

    photo: {
      width: "80%", 
      height: 200,
    },

    imageContainer: {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: "center"
    }
  
  });

export default PostScreen;