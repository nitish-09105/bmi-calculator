import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Handle = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const calculateBmi = async() => {
    let bmi = weight / (height * height);
    await setBmi(bmi.toFixed(1));
    await checkBmi(bmi);
  };
  const checkBmi = async (bmi) => {
    if (bmi.valueOf() < 18.5) {
      setMessage("You are Underweight");
    } else if (bmi.valueOf() >= 18.5 && bmi.valueOf() <= 24.9) {
      setMessage("You are Normal weight");
    } else if (bmi.valueOf() >= 25 && bmi.valueOf() <= 29.9) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  };

  const onreload = () => {
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await calculateBmi();
    console.log("weight:", weight);
    console.log("Height:", height);
    console.log("BMI:", bmi);
    console.log("checkBmi", message);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Weight (Kgs)</label>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={handleWeight}
              required
            />
          </div>
          <div>
            <label htmlFor="">Height (Meters)</label>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={handleHeight}
              required
            />
          </div>
          <div>
            <button className="btn btn-outline" type="submit">
              Submit
            </button>
            <butto className="btn btn-outline" type="submit" onClick={onreload}>
              Reload
            </butto>
          </div>
          <div className="center">
            <h4>BMI is: {bmi}</h4>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Handle;
