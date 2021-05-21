import React from "react";

import CategoryDropDown from "../CategoryDropDown/index";

import "./index.css";

const Header = (props) => {
  return (
    <header className="container sticky">
      <div className="app-header">
        <h1 className="title">ICT TEST</h1>
        <div className="category">
          <CategoryDropDown
            onSelectCategory={props.onSelectCategory}
            categories={props.categories}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
