import React, { Component } from 'react';

const API = 'AIzaSyDysXJFV1SVivIabuf_04oTvgpGrq5HTas'
const channelID = 'UCnQWRzqPuCpOw0aJ4HwQjIQ'
const result = 10;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {
  constructor(props){
    super(props);

     this.state = {
       resultVideo: []
     };
  }

  clicked = () => {
    fetch(finalURL)
      .then(res => res.json())
      .then(resJSON => {
        // console.log(resJSON);
        const resultVideo = resJSON.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({resultVideo});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(finalURL);
    return (
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
        {
          this.state.resultVideo.map((link, i) => {
            console.log(link);
            let frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} title="youtube" frameBorder="0" allowFullScreen></iframe></div>
            return frame;
          })
        }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;