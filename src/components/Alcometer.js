import { Paper } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AlcometerForm from "./AlcometerForm";
const Alcometer = () => {
  const [alcoholLevel, setAlcoholLevel] = useState(null);

  const bloodAlcoholLevel = (bottle, time, gender, weight) => {
    const litres = Number(bottle) * 0.33;
    let grams = Number(litres) * 8 * 4.5;
    const burning = Number(weight) / 10;
    let gramsLeft = Number(grams) - Number(burning) * Number(time);
    switch (gender) {
      case "female":
        setAlcoholLevel(Number(gramsLeft) / (Number(weight) * 0.6));
        break;
      case "male":
        setAlcoholLevel(Number(gramsLeft) / (Number(weight) * 0.7));
        break;
      default:
        break;
    }
  };

  return (
    <Paper
      style={{
        padding: "27px",
        textAlign: "center",
        backgroundColor: "snow",
        marginTop: "27px",
      }}
      elevation="2"
    >
      <h1>Calculating blood alcohol level</h1>
      <AlcometerForm bloodAlcoholLevel={bloodAlcoholLevel} />
      {alcoholLevel != null ? <h3>{alcoholLevel.toFixed(2)}</h3> : ""}
    </Paper>
  );
};

export default Alcometer;
