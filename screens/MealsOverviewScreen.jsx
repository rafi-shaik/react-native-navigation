import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((each) =>
    each.categoryIds.includes(categoryId)
  );

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
