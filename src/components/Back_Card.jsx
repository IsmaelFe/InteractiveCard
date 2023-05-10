import React from "react";
import PropTypes from "prop-types";

const Back_Card = ({ card, image }) => {
  const styles = {
    textAlign: "end",
    color: "white",
    fontSize: "0.7em",
    letterSpacing: "1.5px",
  };

  const stylesDesktop = {
    textAlign: "end",
    color: "white",
    fontSize: "1em",
    letterSpacing: "1.5px",
  };

  return (
    <div className="card1">
      <input
        style={image > 500 ? stylesDesktop : styles}
        value={card.cvc}
        type="text"
        className="input-back-card"
        readOnly
      ></input>
      <img src="../../public/assets/images/bg-card-back.png" alt="card"></img>
    </div>
  );
};

Back_Card.propTypes = {
  card: PropTypes.object,
  image: PropTypes.number,
};

export default Back_Card;
