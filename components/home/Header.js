import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Logo from "../../assets/img/header-logo.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={Logo} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.iconcontainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadbadge}>
            <Text style={styles.unreadbadgeText}>5</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconcontainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    resizeMode: "contain",
  },
  unreadbadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  unreadbadgeText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
