import { Button, TextField, Select, Paper } from "@material-ui/core";
import React, { useState } from "react";
const AlcometerForm = ({ bloodAlcoholLevel }) => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const [weight, setWeight] = useState(0);

  const [bottle, setBottle] = useState(0);
  const [gender, setGender] = useState(0);
  const [time, setTime] = useState(0);
  return (
    <Paper style={{ padding: "27px" }} elevation="4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          bloodAlcoholLevel(bottle, time, gender, weight);
        }}
      >
        Weight{" "}
        <TextField
          min="1"
          type="number"
          onChange={(e) => setWeight(e.currentTarget.value)}
        />
        <label>Bottles</label>
        <Select
          value={bottle}
          onChange={(e) => setBottle(e.currentTarget.value)}
        >
          {numbers.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </Select>
        <label>Time</label>
        <Select value={time} onChange={(e) => setTime(e.currentTarget.value)}>
          {numbers.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </Select>
        <hr />
        <h2>Gender</h2>
        Male{" "}
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setGender("male");
          }}
        ></input>
        Female{" "}
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setGender("female");
          }}
        ></input>
        <br />
        <hr />
        <Button variant="contained" color="primary" type="submit">
          Calculate
        </Button>
      </form>
    </Paper>
  );
};

export default AlcometerForm;
