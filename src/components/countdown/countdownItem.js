import React from "react";

import { getImageSrc } from "../../helpers";

import "./index.css";

class CountDownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: {},
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      countDown: this.getCountDown(),
    });
  }

  pad2(number) {
    return (number < 10 ? "0" : "") + number;
  }

  getCountDown() {
    debugger;
    var now = new Date().getTime();
    var timeleft = new Date(this.props.item.startsAt) - now;
    if (timeleft < 0) {
      return {
        id: 0,
        title: "Started",
      };
    } else {
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      return {
        id: 1,
        title: `${this.pad2(days)}:${this.pad2(hours)}:${this.pad2(
          minutes
        )}:${this.pad2(seconds)}`,
      };
    }
  }

  render() {
    var { item } = this.props;

    return (
      <div className="countdown-group-item">
        <img src={getImageSrc(item.image)} />
        <h2>{item.title}</h2>
        <p>{item.category.name}</p>
        <p className={this.state.countDown.id === 0 ? "started" : "pending"}>
          {this.state.countDown.title}
        </p>
      </div>
    );
  }
}

export default CountDownItem;
