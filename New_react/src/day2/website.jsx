import React from "react";

export default function Website() {
  return (
    <div>
      <Header />
    </div>
  );
}

const naitems = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
];

const Header = () => {
  return (
    <>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="">contac</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        {/* </ul> */}
      </nav>
    </>
  );
};
