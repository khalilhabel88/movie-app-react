import React from "react";
import Rate from "./rated";
const SearchBar = props => {
  return (
    <div className="nav">
      <input
        className="find"
        type="text"
        onChange={props.changeHandler}
        placeholder="Please Enter a search word..."
      />
      <Rate
        rating={props.rate}
        rateChange={props.rateChange}
        isClickeble={true}
      />
    </div>
  );
};
export default SearchBar;
