import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDown from "./DropDown";
import { Form } from "./Form";

export const Fert = () => {
  const [formData, setFormData] = useState({
    temp: "",
    rainfall: "",
    humidity: "",
    pH: "",
    phosphorus: "",
    potassium: "",
    nitrogen: "",
  });

  const { temp, rainfall, humidity, pH, phosphorus, potassium, nitrogen } =
    formData;

  const ddOnClick = (e) => {
    const data = JSON.parse(e);

    setFormData({
      ...formData,
      pH: data.pH,
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
    fertData[0] = parseFloat(nitrogen);
    fertData[1] = parseFloat(phosphorus);
    fertData[2] = parseFloat(potassium);
    fertData[3] = parseFloat(temp);
    fertData[4] = parseFloat(humidity);
    fertData[5] = parseFloat(pH);
    // fertData[6] = parseFloat(rainfall);

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
          <label htmlFor='pH'>pH</label>
          <input
            type='number'
            name='pH'
            value={pH}
            onChange={(e) => onChange(e)}
          />
          {/* nitro */}
          <label htmlFor='rainfall'>Rainfall</label>
          <input
            type='number'
            name='rainfall'
            value={rainfall}
            onChange={(e) => onChange(e)}
          />
          <Link to='/' className='btn btn-continue'>
            Back
          </Link>
          <button className='btn btn-continue'>Submit</button>
        </form>
      </div>
    </>
  );
};
