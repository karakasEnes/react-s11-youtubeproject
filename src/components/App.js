import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  handleSubmitForm = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.handleSubmitForm} />
        <p>I have {this.state.videos.length} videos.</p>
      </div>
    );
  }
}

export default App;
