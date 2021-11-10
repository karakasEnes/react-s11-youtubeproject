import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

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
      <div className="ui container">
        <SearchBar onSubmitForm={this.handleSubmitForm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column ">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column ">
              <VideoList
                onVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
