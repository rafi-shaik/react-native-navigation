import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((each) =>
    each.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => {
    return <MealItem mealItem={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
