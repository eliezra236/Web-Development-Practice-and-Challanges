import React from "react";

function Card(prompts) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{prompts.name}</h2>
          <img
            className="circle-img"
            src={prompts.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{prompts.tel}</p>
          <p className="info">{prompts.mail}</p>
        </div>
      </div>
    );
}

export default Card;