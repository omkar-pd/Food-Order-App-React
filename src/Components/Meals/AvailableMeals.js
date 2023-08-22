import React, { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem";
import styles from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "FirbaseUrl/meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await res.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const MealsList = meals?.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
