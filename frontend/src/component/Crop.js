import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDown from "./DropDown";
import states from "../dropDownData";

export const Crop = () => {
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
    const cropData = [];
    cropData[0] = parseFloat(nitrogen);
    cropData[1] = parseFloat(phosphorus);
    cropData[2] = parseFloat(potassium);
    cropData[3] = parseFloat(temp);
    cropData[4] = parseFloat(humidity);
    cropData[5] = parseFloat(pH);
    cropData[6] = parseFloat(rainfall);

    console.log(cropData);

    try {
      const data = { data: cropData };
      const response = await axios.post("/api/data", data);
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
        <h1>CROP</h1>
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
