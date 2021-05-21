import React, { useState, useEffect } from "react";

import { fetchCountdowns, fetchCategories } from "../../helpers";

import Header from "../header";
import CountDown from "../countdown";

import "./index.css";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: 0,
      countDowns: [],
      categories: [],
      isLoading: false,
    };

    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getCountdowns();
  }

  getCategories() {
    this.setState({ isLoading: true });
    fetchCategories().then((result) => {
      var items = [
        {
          id: 0,
          name: "All Categories",
        },
      ];
      result.forEach((item) => {
        items.push(item);
      });

      this.setState({
        categories: items,
      });
      this.setState({ isLoading: false });
    });
  }

  getCountdowns() {
    this.setState({ isLoading: true });
    fetchCountdowns().then((result) => {
      this.setState({
        countDowns: result.map((item) => {
          var category = this.state.categories.find(
            (x) => x.id == item.categoryId
          );
          return { ...item, category };
        }),
      });
    });
  }

  handleCategory = (val) => {
    this.setState({
      selectCategory: val,
    });
  };

  render() {
    return (
      <div>
        <Header
          onSelectCategory={this.handleCategory}
          categories={this.state.categories}
        />

        {this.state.isLoading}

        {this.state.isLoading && <div class="loader"></div>}
        {!this.state.isLoading && (
          <CountDown
            key={this.state.selectCategory}
            countDowns={this.state.countDowns}
            categoryId={this.state.selectCategory}
          />
        )}
      </div>
    );
  }
}

export default Categories;
