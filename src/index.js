import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_data';

const API_KEY = 'AIzaSyDNmNxcSIGF1j9hZBh5hWmPDwrN2ek4LVg';

// Creating a new component

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      // this is equal to -> this.setState({ videos: videos })
      // this will only work when the key is same as the property name

    });
  }

  render(){
  const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
  );
  }
}

// Take this compenent and generate html
ReactDOM.render(<App />,document.querySelector('.container'));
