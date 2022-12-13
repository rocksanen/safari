import React from "react";
import "./nav.css";
import { FiHome } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        href="#parallerheader"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#products"
        onClick={() => setActiveNav("#products")}
        className={activeNav === "#products" ? "active" : ""}
      >
        <BsShop />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
