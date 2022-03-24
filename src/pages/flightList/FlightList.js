import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import {
  getAllFlights,
  getAllPlaces,
  getSearchFlights,
} from "../../redux/apiCalls";
import "./FlightList.css";

const FlightList = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(0);
  const role = localStorage.getItem("role");

  const places = useSelector((state) => state.flight.places);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllFlights(dispatch);
    getAllPlaces(dispatch);
  }, [dispatch]);

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };

  const handleDate = (e) => {
    setDepartureDate(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchFlights(from, to, departureDate, price, dispatch);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    navigate("/flights/new");
  };

  return (
    <>
      <div>
        <h1>FlightList</h1>

        <form
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <label htmlFor="flights">Search a Flight:</label>
          <select
            id="flights"
            name="flights"
            style={{ margin: "10px" }}
            onChange={handleFrom}
          >
            <option defaultValue>from</option>
            {places.map((place) => (
              <option value={place}>{place}</option>
            ))}
          </select>
          <select id="flights" name="flights" onChange={handleTo}>
            <option defaultValue>to</option>
            {places.map((place) => (
              <option value={place}>{place}</option>
            ))}
          </select>
          <label htmlFor="date" style={{ marginLeft: "10px" }}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            style={{ margin: "10px" }}
            onChange={handleDate}
          />
          <select
            id="price"
            name="price"
            style={{ margin: "10px" }}
            onChange={handlePrice}
          >
            <option defaultValue>price</option>
            <option value="10000">INR 10000+</option>
            <option value="20000">INR 20000+</option>
            <option value="30000">INR 30000+</option>
            <option value="40000">INR 40000+</option>
            <option value="50000">INR 50000+</option>
            <option value="60000">INR 60000+</option>
          </select>
          <button style={{ margin: "10px" }} onClick={handleSearch}>
            Search
          </button>

          {role === "admin" && (
            <button style={{ margin: "10px" }} onClick={handleAdd}>
              Add a Flight
            </button>
          )}
        </form>
        <Table />
      </div>
    </>
  );
};

export default FlightList;
