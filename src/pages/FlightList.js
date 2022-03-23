import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFlights, getSearchFlights } from "../redux/apiCalls";
import "./FlightList.css";

const FlightList = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(0);
  // const role = localStorage.getItem("role");

  const flights = useSelector((state) => state.flight.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllFlights(dispatch);
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
      <div style={{ backgroundColor: "light teal" }}>
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
            <option value="vadodara">vadodara</option>
            <option value="ahmedabad">ahmedabad</option>
            <option value="banglore">banglore</option>
            <option value="mumbai">mumbai</option>
            <option value="goa">goa</option>
            <option value="hyderabad">hyderabad</option>
          </select>
          <select id="flights" name="flights" onChange={handleTo}>
            <option defaultValue>to</option>
            <option value="vadodara">vadodara</option>
            <option value="ahmedabad">ahmedabad</option>
            <option value="banglore">banglore</option>
            <option value="mumbai">mumbai</option>
            <option value="goa">goa</option>
            <option value="hyderabad">hyderabad</option>
          </select>
          <label htmlFor="birthday" style={{ marginLeft: "10px" }}>
            Date:
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
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
          <button style={{ margin: "10px" }} onClick={handleAdd}>
            Add a Flight
          </button>
          {/* {role === "admin" && (
            <button style={{ margin: "10px" }} onClick={handleAdd}>
              Add a Flight
            </button>
          )} */}
        </form>

        <table style={{ width: "100%" }}>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Departure Time</th>
            <th>Landing Time</th>
            <th>Price</th>
          </tr>

          {flights.length !== 0 ? (
            flights.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.landingDate}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa fa-rupee" style={{ fontSize: "18px" }}></i>
                    {flight.price}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <h1>No Flights are available...</h1>
          )}
        </table>
      </div>
    </>
  );
};

export default FlightList;
