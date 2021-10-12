import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, marginTop: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "#FFF" }}>
              {story.user.length > 8
                ? story.user.slice(0, 6).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
