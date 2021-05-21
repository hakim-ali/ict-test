import React from "react";

import "./index.css";

import CountDownItem from "./countdownItem";

const CountDown = (props) => {
  var categories =
    props.categoryId == 0
      ? props.countDowns
      : props.countDowns.filter((x) => x.categoryId == props.categoryId);
  return (
    <div className="countdown-group">
      {categories.map((item) => {
        return <CountDownItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CountDown;
