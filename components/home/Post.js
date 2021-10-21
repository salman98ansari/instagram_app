import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const postFooterIcons = [
  {
    name: "like",
    imageurl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png",
    likeimageurl: "https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png",
  },
];

const Postsss = ({ post }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.container}></View>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        {/* <Commentss post={post} /> */}
      </View>
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
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "#fff", marginLeft: 5 }}>{post.user}</Text>
    </View>

    <View>
      <TouchableOpacity>
        <Text
          style={{
            color: "#FFF",
            fontWeight: "bold",
            marginHorizontal: 15,
            fontSize: 20,
          }}
        >
          ...
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
// // implicit return
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "contain" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftfootercontainer}>
      <Icon imgstyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
      <Icon imgstyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
      <Icon imgstyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
    </View>

    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgstyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "#FFF", fontWeight: "700" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "#FFF" }}>
      <Text>{post.user}</Text>
      <Text style={{ marginLeft: 5 }}> {post.caption}</Text>
    </Text>
  </View>
);

const Icon = ({ imgstyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgstyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Commentss = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: 700 }}>{comment.user}</Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
  container: {
    height: 0.2,
    width: "100%",
    backgroundColor: "gray",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftfootercontainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Postsss;
