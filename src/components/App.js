import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSubmitForm = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });

    this.setState({ videos: response.data.items });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("from App: ", this.state.selectedVideo);
    console.log("from App: ", video);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitForm={this.handleSubmitForm} />
        <p>I have {this.state.videos.length} videos.</p>
        <VideoList
          onVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
