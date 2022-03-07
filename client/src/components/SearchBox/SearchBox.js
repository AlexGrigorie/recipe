import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--light-red br3"
        type="search"
        placeholder="caută rețeta"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
