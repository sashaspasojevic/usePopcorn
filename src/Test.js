import React, { useState } from "react";
import StarsRating from "./StarsRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarsRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
};

export default Test;
