import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="innerDiv">
      <div className="outerDiv">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            type="text"
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        {/* NOTE "Link" Provides declarative, accessible navigation around your application. */}
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)} // checking if the datas are not empty
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
