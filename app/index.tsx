import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import getNews from "./getNews";

export default function Index() {
  const [news, setNews] = useState([]);

  const getResult = async () => {
    const res = await getNews();
    setNews(res.data.articles);
  };
  useEffect(() => {
    getResult();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <FlatList
        onRefresh={() => getResult()}
        refreshing={refresh}
        data={data}
        keyExtractor={(data) => data.publishedAt + data.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.description}
            image={item.urlToImage}
            onPress={() => navigation.navigate("Info", item)}
          />
        )}
      /> */}
      <FlatList
        // onRefresh={() => getResult()}
        data={news}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => <Card item={item} />}
        style={{ marginBottom: 65 }}
      />
    </View>
  );
}
