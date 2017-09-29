import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// components
import SearchBar from '../components/SearchBar';
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

const API_KEY = 'AIzaSyCsIlJDND-8-6k3EJjq5My8s_Y5HJYrai0';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('dragon ball super');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // reduce slow speed when typing in search input
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <h1>Video Browser</h1>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}
