import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealList = ({ title, listItems }) => {
  return (
    <>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{title}</Text>
      </View>
      {listItems.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default MealList;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  listItem: {
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    fontSize: 15,
    textAlign: 'center'
  },
});
