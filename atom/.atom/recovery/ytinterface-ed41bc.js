import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import YTSearch from 'youtube-api-search';
import './dashboard.css';

const API_KEY="AIzaSyABm9uQ2_dS74pnh_T_abcfJB_04LTXmuk";

export default class YTInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }

    searchVideo = (query) => {
        YTSearch({key: API_KEY, term: query}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    selectVideo = (event) => {
        event.preventDefault();
        this.setState({
            selectedVideo: this.state.videos[event.target.getAttribute('data-index')]
        });
    }

    displaySearchVideos = () => {
        let divs = [];
        let i = 0;
        for(const video of this.state.videos) {
            divs.push(<div data-index={i} data-id={video.id.videoId} onClick={this.selectVideo}>{video.snippet.title}</div>);
            i += 1;
        }
        return divs;
    }

    getSelectedVideoUrl = () => {
        if (!this.state.selectedVideo)
            return null;
        return 'https://www.youtube.com/embed/' + this.state.selectedVideo.id.videoId;
    }

    componentDidMount() {
        document.querySelector('input[name="yt-search"]').addEventListener('keyup', (event) => {
            this.searchVideo(event.target.value);
        });
    }

    render() {
        return (
            <div className="radio-search">
                <input name="yt-search" type="text" placeholder="recherche yt"/>
                <ReactPlayer url={this.state.selectedVideo ? `https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}` : ''} controls={true} width={400} height={300}></ReactPlayer>
                <p>{this.state.selectedVideo ? this.state.selectedVideo.snippet.description : ''}</p>
                {this.displaySearchVideos()}
            </div>
        );
    }
}
