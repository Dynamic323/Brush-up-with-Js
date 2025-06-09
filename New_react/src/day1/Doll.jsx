import React, { createElement, useState } from "react";
import "./day1.css";
// import Checker from "./mail";
import { Solver } from ".";

function Doll({ msg, handelMsg }) {
  const [ini, setinital] = useState(0);

  const update = () => {
    setinital(ini + 1);

    console.log(Solver(3, 3));
  };

  console.log(msg);

  return (
    <div className="div">
      <button onClick={update}> click me </button>
      {/* <Checker /> */}
      <input
        type="text"
        value={msg}
        onChange={(e) => handelMsg(e.target.value)}
      />

      <Display ms={msg} />

      <button
        onClick={() => {
          localStorage.setItem("msg", msg);
        }}
      >
        save to localStorage
      </button>
      {ini}
      <h1 className="my_h1"> Lorem ipsum dolor sit.</h1>
    </div>
  );
}

const Display = ({ ms }) => {
  return createElement("h1", null, ms || localStorage.getItem("msg"));
};

export function picker(params) {}

export default Doll;
