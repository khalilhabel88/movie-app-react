import React from "react";
import Rate from "./rated";
const Movie = props => {
  const { title, pic, raiting } = props.mv;
  return (
    // <div className="body">
    //   <h1 className="title">{title}</h1>

    //   <img src={pic} className="card-image" />

    //   <p className="rate">{raiting} </p>
    // </div>
    <div className="pics">
      <div class="card" style={{ width: "18rem" }}>
        <img src={pic} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-text">
            {title}
            <span className="rate">
              <Rate rating={raiting} />
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Movie;
