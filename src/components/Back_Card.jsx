import React from "react";
import PropTypes from "prop-types";

const Back_Card = ({ card, image }) => {
  return (
    <div className="card1">
      <input
        value={card.cvc}
        type="text"
        className="input-back-card"
        readOnly
      ></input>
      <img src="../../assets/images/bg-card-back.png" alt="card"></img>
    </div>
  );
};

Back_Card.propTypes = {
  card: PropTypes.object,
  image: PropTypes.number,
};

export default Back_Card;
