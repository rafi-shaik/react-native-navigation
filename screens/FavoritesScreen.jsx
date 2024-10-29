import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItemsList from "../components/MealItemsList";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals yet!</Text>
      </View>
    );
  }

  return <MealItemsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
