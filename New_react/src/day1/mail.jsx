import { useEffect, useState } from "react";

export const Home = () => {
  const [words, setwords] = useState([
    "Hello ",
    "How are ",
    "You doing ",
    "Today",
  ]);
  const [num, setnum] = useState(0);
  // function next() {
  //   useEffect(() => {
  //     setnum(num + 1);

  //     console.log(num);
  //   }, []);
  // }

  return (
    <div>
      <h1>This is the Home page</h1>
      <button onClick={() => setnum(num + 1)}>Next</button>
      <Content>{words[num]}</Content>
    </div>
  );
};

const Content = ({ children }) => {
  return (
    <div>
      <h4>Top</h4>
      {children}
      <h4>Bottom</h4>
    </div>
  );
};
