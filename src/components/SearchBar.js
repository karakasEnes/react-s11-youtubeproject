import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.search);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>VideoSearch:</label>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
