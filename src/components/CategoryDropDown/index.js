import React from "react";

import "./index.css";

class CategoryDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onSelectCategory(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.categories.map((e, key) => {
              return (
                <option key={key} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
}

export default CategoryDropDown;
