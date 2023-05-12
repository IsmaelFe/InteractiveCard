import React from "react";
import PropTypes from "prop-types";

const Front_Card = ({ card, image }) => {
  const stylesInput = {
    color: "white",
    fontSize: "1.3em",
    textAlign: "center",
    letterSpacing: "2px",
    fontWeight: "100",
  };

  const stylesDesktop = {
    width: "330px",
    color: "white",
    fontSize: "1.5em",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: "100",
    marginLeft: "30px",
  };

  let value = card.number;
  let numberOne = value.substr(0, 4);
  let numberTwo = value.substr(4, 4);
  let numberTre = value.substr(8, 4);
  let numberFour = value.substr(12, 4);

  let lMonth = card.month.length;
  let lYear = card.year.length;

  return (
    <div className="card2">
      <span className="span-front-card-1">{card.holder}</span>
      <span className="span-front-card-2">
        {lMonth > 1 ? null : "0"}
        {card.month}/{lYear > 1 ? null : "0"}
        {card.year}
      </span>
      <img src="../../assets/images/card-logo.svg" className="icon-card"></img>
      <input
        style={image > 500 ? stylesDesktop : stylesInput}
        value={`${numberOne} ${numberTwo} ${numberTre} ${numberFour}`}
        type="text"
        readOnly
        className="input-front-card"
      ></input>
      <img src="../../assets/images/bg-card-front.png" alt="card"></img>
    </div>
  );
};

Front_Card.propTypes = {
  card: PropTypes.object,
  image: PropTypes.number,
};

export default Front_Card;
