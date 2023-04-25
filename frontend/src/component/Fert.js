import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDown from "./DropDown";
import { Form } from "./Form";

export const Fert = () => {
  const [formData, setFormData] = useState({
    temp: "1",
    moisture: "1",
    humidity: "1",
    phosphorus: "1",
    potassium: "1",
    nitrogen: "1",
  });

  const { temp, moisture, humidity, pH, phosphorus, potassium, nitrogen } =
    formData;

  const ddOnClick = (e) => {
    const data = JSON.parse(e);

    setFormData({
      ...formData,
      phosphorus: data.phosphorus,
      potassium: data.potassium,
      nitrogen: data.nitrogen,
    });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const fertData = [];
    fertData[0] = parseFloat(temp);
    fertData[1] = parseFloat(humidity);
    fertData[2] = parseFloat(moisture);
    fertData[3] = parseFloat(nitrogen);
    fertData[4] = parseFloat(potassium);
    fertData[5] = parseFloat(phosphorus);

    console.log(fertData);

    try {
      const data = { data: fertData };
      const response = await axios.post("/api/fert", data);
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error(error);
    }
    // submit function (action)
  };
  return (
    <>
      <div className='form-container'>
        <h1>FERTILIZER</h1>
        <h1>RECOMMENDATION</h1>
        <DropDown onClick={ddOnClick} />

        <form onSubmit={(e) => onSubmit(e)}>
          <label htmlFor='nitrogen'>Nitrogen</label>
          <input
            type='number'
            placeholder='0'
            name='nitrogen'
            value={nitrogen}
            onChange={(e) => onChange(e)}
          />

          <label htmlFor='phosphorus'>Phosphorus</label>
          <input
            type='number'
            name='phosphorus'
            value={phosphorus}
            onChange={(e) => onChange(e)}
          />

          <label htmlFor='potassium'>Potassium</label>
          <input
            type='number'
            name='potassium'
            value={potassium}
            onChange={(e) => onChange(e)}
          />

          {/* phosphorus */}
          <label htmlFor='temp'>Temperature</label>
          <input
            type='number'
            name='temp'
            value={temp}
            onChange={(e) => onChange(e)}
          />

          {/*  pota*/}
          <label htmlFor='humidity'>Humidity</label>
          <input
            type='number'
            name='humidity'
            value={humidity}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor='moisture'>Moisture</label>
          <input
            type='number'
            name='moisture'
            value={moisture}
            onChange={(e) => onChange(e)}
          />
          {/* nitro */}
          {/* <label htmlFor='rainfall'>Rainfall</label>
          <input
            type='number'
            name='rainfall'
            value={rainfall}
            onChange={(e) => onChange(e)}
          /> */}
          <Link to='/' className='btn btn-continue'>
            Back
          </Link>
          <button className='btn btn-continue'>Submit</button>
        </form>
      </div>
    </>
  );
};
