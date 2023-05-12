import { useState, useEffect } from "react";
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

  let completeState = false;
  let mobileImage = "../../assets/images/bg-main-mobile.png";
  let desktopImage = "../../assets/images/bg-main-desktop.png";

  const [card, setCard] = useState(initialState);
  const [image, setImage] = useState(window.innerWidth);
  const [form, setForm] = useState(completeState);

  useEffect(() => {
    const handleResize = () => {
      setImage(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const sendForm = () => {
    setForm(true);
  };

  return (
    <main className="container-main">
      <div className="container-card">
        <img
          className="back-img"
          src={image > 500 ? desktopImage : mobileImage}
          alt="fondo"
        ></img>
        <Back_Card card={card} image={image} />
        <Front_Card card={card} image={image} />
      </div>
      <div className="container-form">
        {form ? (
          <Complete_state />
        ) : (
          <Form_card
            setNew={newCard}
            setNum={newNum}
            setMonth={newMonth}
            setYear={newYear}
            setCvc={newCvc}
            form={sendForm}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
