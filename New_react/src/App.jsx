import React, { useState } from "react";
import Doll from "./day1/Doll";
import { Home } from "./day1/mail";
// import Mail from "./day1/mail";
function App() {
  const [msg, setmsg] = useState("");

  const [mode, setmode] = useState(false);
  return (
    <div className={`${mode ? "dark" : "light"}`}>
      <button
        onClick={() => {
          setmode(!mode);
        }}
      >
        {" "}
        {mode ? "light" : "dark"}
      </button>
      <Doll msg={msg} handelMsg={setmsg} />
      <Home />
    </div>
  );
}

export default App;
