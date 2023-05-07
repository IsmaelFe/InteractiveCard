import React, { useState } from "react";
import Back_Card from "./Back_Card";
import Form_card from "./Form_card";
import Front_Card from "./Front_Card";
import Complete_state from "./Complete_state";

const Main = () => {
  const initialState = {
    holder: "JANE APPLESEED",
    number: "0000000000000000",
    month: "00",
    year: "00",
    cvc: "000",
  };

  let nuevoValor = false;

  const [card, setCard] = useState(initialState);

  const newCard = (value) => {
    setCard({
      ...card,
      holder: value,
    });
  };

  const newNum = (value) => {
    setCard({
      ...card,
      number: value,
    });
  };

  const newMonth = (value) => {
    setCard({
      ...card,
      month: value,
    });
  };

  const newYear = (value) => {
    setCard({
      ...card,
      year: value,
    });
  };

  const newCvc = (value) => {
    setCard({
      ...card,
      cvc: value,
    });
  };

  return (
    <main className="container-main">
      <div className="container-card">
        <img
          className="back-img"
          src="../../public/assets/images/bg-main-mobile.png"
          alt="fondo"
        ></img>
        <Back_Card card={card} />
        <Front_Card card={card} />
      </div>
      <div className="container-form">
        {nuevoValor ? (
          <Complete_state />
        ) : (
          <Form_card
            setNew={newCard}
            setNum={newNum}
            setMonth={newMonth}
            setYear={newYear}
            setCvc={newCvc}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
