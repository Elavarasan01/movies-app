import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="elliot-navigation">
      <ul style={{display:"flex"}}>
        <li>
          <Link to="/dashboard">Movies</Link>
        </li>
        <li>
          <Link to="/blogpage">About Us</Link>
        </li>
        <li>
          <Link to="/writeonmedium">Feedback</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
