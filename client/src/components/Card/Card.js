import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <section className="tc grow bg-light-red br3 pa3 ma2 dib bw2 shadow-5 pointer">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="recipe" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </section>
  );
};
export default Card;
