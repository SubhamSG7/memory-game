import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <div>
        <h2>Memory Test</h2>
        <Link to="/Game">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
