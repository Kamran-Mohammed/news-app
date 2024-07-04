import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
// import AppButton from "./AppButton";

const Card = ({ item }) => {
  const { title, description, urlToImage } = item;
  //   console.log(item);
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Not yet implemented");
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={
              urlToImage
                ? {
                    uri: urlToImage,
                  }
                : require("./download.png")
            }
          />
          <View style={styles.detailsConatiner}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          {/* <AppButton onPress={onPress} title="Full News Link" /> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    overflow: "hidden",
    margin: 10,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsConatiner: {
    padding: 20,
  },
  description: {
    fontSize: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    color: "black",
    marginBottom: 7,
    fontWeight: "bold",
  },
});
export default Card;
