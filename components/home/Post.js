import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Postsss = ({ post }) => {
  // console.log(post);
  return (
    <View style={{ marginBottom: 30 }}>
      {/* <PostHeader post={post} /> */}
      <Text style={{ color: "#FFF" }}>Salman</Text>
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "#fff" }}>ansari</Text>
    </View>
  </View>
);

export default Postsss;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
});
