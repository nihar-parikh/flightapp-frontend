import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFlight } from "../../redux/apiCalls";
import "./AddFlight.css";

const AddFlight = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const [landingDate, setLandingDate] = useState("");
  const [landingTime, setLandingTime] = useState("");

  const [price, setPrice] = useState(0);
  const [newFlight, setNewFlight] = useState(false);
  const dispatch = useDispatch();

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };

  const handleDepartureDate = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleDepartureTime = (e) => {
    setDepartureTime(e.target.value);
  };
  const handleLandingDate = (e) => {
    setLandingDate(e.target.value);
  };
  const handleLandingTime = (e) => {
    setLandingTime(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addFlight(
      {
        from,
        to,
        departureDate,
        departureTime,
        landingDate,
        landingTime,
        price,
      },
      dispatch
    );
    setNewFlight(true);
    setFrom("");
    setTo("");
    setDepartureDate("");
    setDepartureTime("");
    setLandingDate("");
    setLandingTime("");
    setPrice("");
    setTimeout(() => {
      setNewFlight(false);
    }, 2000);
  };

  return (
    <>
      <div className="flightContainer">
        <form className="flightInfo">
          <label htmlFor="flights">Create a Flight:</label>
          {newFlight && <h1>New Flight has been added.</h1>}

          <select
            id="flights"
            name="flights"
            className="input"
            value={from}
            onChange={handleFrom}
          >
            <option defaultValue>from</option>

            <option value="vadodara">vadodara</option>
            <option value="ahmedabad">ahmedabad</option>
            <option value="banglore">banglore</option>
            <option value="mumbai">mumbai</option>
            <option value="goa">goa</option>
            <option value="hyderabad">hyderabad</option>
          </select>
          <select
            id="flights"
            name="flights"
            className="input"
            value={to}
            onChange={handleTo}
          >
            <option defaultValue>to</option>
            <option value="vadodara">vadodara</option>
            <option value="ahmedabad">ahmedabad</option>
            <option value="banglore">banglore</option>
            <option value="mumbai">mumbai</option>
            <option value="goa">goa</option>
            <option value="hyderabad">hyderabad</option>
          </select>
          <label htmlFor="departureDate" style={{ marginLeft: "10px" }}>
            Departure Date:
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            className="input"
            value={departureDate}
            style={{ margin: "10px" }}
            onChange={handleDepartureDate}
          />
          <label htmlFor="appt">Select Departure time:</label>
          <input
            type="time"
            id="appt"
            name="appt"
            value={departureTime}
            className="input"
            step="2"
            onChange={handleDepartureTime}
          />
          <label htmlFor="landingDate" style={{ marginLeft: "10px" }}>
            Landing Date:
          </label>
          <input
            type="date"
            id="landingDate"
            name="landingDate"
            className="input"
            value={landingDate}
            style={{ margin: "10px" }}
            onChange={handleLandingDate}
          />
          <label htmlFor="appt">Select Landing Time:</label>
          <input
            type="time"
            id="appt"
            name="appt"
            className="input"
            value={landingTime}
            step="2"
            onChange={handleLandingTime}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            className="input"
            name="price"
            value={price}
            style={{ marginLeft: "10px" }}
            onChange={handlePrice}
          />
          <div className="buttonContainer">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/flights");
              }}
            >
              Back
            </button>
            <button onClick={handleAdd}>Add a Flight</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFlight;
