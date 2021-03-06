import "./App.css";
import FlightList from "../pages/flightList/FlightList";
import Login from "../pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddFlight from "../pages/addFlight/AddFlight";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Navigate replace to="/flights" /> : <Login />}
          />

          <Route path="/flights" element={<FlightList />} />
          <Route path="/flights/new" element={<AddFlight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
