import React from "react";
import PropTypes from "prop-types";

const Front_Card = ({ card }) => {
  const stylesInput = {
    color: "white",
    fontSize: "1.3em",
    textAlign: "center",
    letterSpacing: "2px",
    fontWeight: "100",
  };

  let value = card.number;
  let newValue = value.split(" ");

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
      <img
        src="../public/assets/images/card-logo.svg"
        className="icon-card"
      ></img>
      <input
        style={stylesInput}
        value={card.number}
        type="text"
        readOnly
        className="input-front-card"
      ></input>
      <img src="../public/assets/images/bg-card-front.png" alt="card"></img>
    </div>
  );
};

Front_Card.propTypes = {
  card: PropTypes.object,
};

export default Front_Card;
