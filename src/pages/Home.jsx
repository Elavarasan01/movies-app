import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <ul style={{display:"flex"}}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/blogpage">BlogPage</Link>
        </li>
        <li>
          <Link to="/devtoprofile">DevtoProfile</Link>
        </li>
        <li>
          <Link to="/mediumprofile">MediumProfile</Link>
        </li>
        <li>
          <Link to="/writeonmedium">Writeonmedium</Link>
        </li>
        <li>
          <Link to="/writeondevto">Writeondevto</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
