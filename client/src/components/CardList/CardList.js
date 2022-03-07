import React from "react";
import Card from "../Card/Card";

const CardList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            name={recipe.name}
            email={recipe.email}
            id={recipe.id}
          />
        );
      })}
    </>
  );
};

export default CardList;
