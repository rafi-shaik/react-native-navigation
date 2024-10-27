import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMealItem = MEALS.find((meal) => meal.id === mealId);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMealItem;

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>
        {title} {mealId}
      </Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealList title="Ingredients" listItems={ingredients} />
          <MealList title="Steps" listItems={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
