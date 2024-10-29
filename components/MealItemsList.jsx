import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealItemsList = ({ items }) => {
  const renderMealItem = ({ item }) => {
    return <MealItem mealItem={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
