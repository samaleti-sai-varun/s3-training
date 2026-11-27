import React, { useState, useRef } from "react";
import "./Electricity.css";

const ElectricityBill = () => {
  const consumerid = useRef();
  const consumername = useRef();
  const curreading = useRef();
  const prevreading = useRef();

  const [consumerID, setConsumerID] = useState(0);
  const [consumeName, setConsumerName] = useState("");
  const [currentreading, setCurrentreading] = useState(0);
  const [previousreading, setPreviousreading] = useState(0);
  const [units, setUnits] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [showBill, setShowBill] = useState(false);

  const genbill = () => {
    setConsumerID(consumerid.current.value);
    setConsumerName(consumername.current.value);
    setCurrentreading(curreading.current.value);
    setPreviousreading(prevreading.current.value);

    let units =
      Number(curreading.current.value) - Number(prevreading.current.value);
    setUnits(units);

    let pricePerUnit = 0;
    if (units < 300) {
      pricePerUnit = 1.75;
    } else if (units >= 300 && units < 500) {
      pricePerUnit = 3.25;
    } else {
      pricePerUnit = 7.25;
    }
    let total = units * pricePerUnit;
    setTotalBill(total);
    setShowBill(true);
  };

  return (
    <>
      <div className="form">
        <h2>Electricity Bill Generator</h2>
        <div className="row">
          <label>Consumer ID:</label>
          <input type="number" ref={consumerid} />
        </div>

        <div className="row">
          <label>Consumer Name:</label>
          <input type="text" ref={consumername} />
        </div>

        <div className="row">
          <label>Current Reading:</label>
          <input type="number" ref={curreading} />
        </div>

        <div className="row">
          <label>Previous Reading:</label>
          <input type="number" ref={prevreading} />
        </div>

        <button onClick={genbill}>Generate Bill</button>
      </div>
      <hr />
      {showBill && (
        <>
          <h4>Electricity Bill of {consumeName}</h4>
          <p>Consumer ID: {consumerID}</p>
          <p>Consumer Name: {consumeName}</p>
          <p>Current Reading: {currentreading}</p>
          <p>Previous Reading: {previousreading}</p>
          <p>Units: {units}</p>
          <p>Total: {totalBill}</p>
        </>
      )}
    </>
  );
};
export default ElectricityBill;
