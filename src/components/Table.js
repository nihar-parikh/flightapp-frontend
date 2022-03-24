import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const flights = useSelector((state) => state.flight.flights);

  return (
    <div>
      <table
        style={{
          width: "100%",
          border: "1px solid black ",
          backgroundColor: "#1ea1a1",
        }}
      >
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
  );
};

export default Table;
