import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import userPrifle from "../assets/user-profile.png";
import search from "../assets/search.png";
import slider from "../assets/slider.png"
import { FontAwesome6 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: "700", lineHeight: 38.4 }}>Hello , Devs</Text>
          <Text style={{ paddingTop: 2 }}>14 tasks today</Text>
        </View>
        <View style={styles.userContainer}>
          <Image style={styles.user} source={userPrifle} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#000" />
          <Image style={styles.searchIcon} source={search} />
        </View>

        <View style={styles.toggleSlider}>
          {/* <Image style={styles.sliderImg}
            source={slider}
          /> */}
          <FontAwesome6 name="sliders" size={30} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  userContainer: {
    width: 50,
    height: 51,
    borderRadius: 100,
    backgroundColor: "white",
  },

  user: {
    height: 45,
    width: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  searchContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    height: 54,
    width: 230,
    marginTop: 25,
    paddingVertical: 10,
    paddingLeft: 55,
    backgroundColor: "white",
    borderRadius: 15,
    fontWeight: "700",
    border: 1
  },

  searchBox: {
    position: "relative",
  },

  searchIcon: {
    width: 25,
    height: 25,
    postion: "absolute",
    top: -36,
    left: 11,
  },

  toggleSlider: {
    width: 55,
    height: 54,
    backgroundColor: "red",
    borderRadius: 20,
    marginTop: 22,
    color: "#ffff",
    alignItems:'center',
    justifyContent:'center'
  },

  sliderImg: {
    width: 34,
    height: 34,
    marginTop: 10,
    marginHorizontal: 10,
    color: "#ffff"
  }
});