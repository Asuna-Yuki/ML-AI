import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const cropData = [];
    cropData[0] = parseFloat(temp);
    cropData[1] = parseFloat(rainfall);
    cropData[2] = parseFloat(humidity);
    cropData[3] = parseFloat(phosphorus);
    cropData[4] = parseFloat(potassium);
    cropData[5] = parseFloat(pH);
    cropData[6] = parseFloat(nitrogen);

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
        <form onSubmit={(e) => onSubmit(e)}>
          <label htmlFor='temp'>Temprature</label>
          <input
            type='number'
            placeholder='0'
            name='temp'
            value={temp}
            onChange={(e) => onChange(e)}
          />

          <label htmlFor='rainfall'>Rainfall</label>
          <input
            type='number'
            name='rainfall'
            value={rainfall}
            onChange={(e) => onChange(e)}
          />

          <label htmlFor='humidity'>Humidity</label>
          <input
            type='number'
            name='humidity'
            value={humidity}
            onChange={(e) => onChange(e)}
          />

          {/* phosphorus */}
          <label htmlFor='phosphorus'>Phosphorus</label>
          <input
            type='number'
            name='phosphorus'
            value={phosphorus}
            onChange={(e) => onChange(e)}
          />

          {/*  pota*/}
          <label htmlFor='potassium'>Potassium</label>
          <input
            type='number'
            name='potassium'
            value={potassium}
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
          <label htmlFor='nitrogen'>Nitrogen</label>
          <input
            type='number'
            name='nitrogen'
            value={nitrogen}
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
