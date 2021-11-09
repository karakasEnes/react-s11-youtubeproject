import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
  state = {};
  handleSubmitForm = (search) => {
    console.log(search);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.handleSubmitForm} />
      </div>
    );
  }
}

export default App;
