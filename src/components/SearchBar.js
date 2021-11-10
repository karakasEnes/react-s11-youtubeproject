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
      <div className="ui segment">
        <form className="content" onSubmit={this.handleSubmit}>
          <h5>VideoSearch:</h5>
          <div className="ui input">
            <input
              className="ui input"
              value={this.state.search}
              onChange={this.handleChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
