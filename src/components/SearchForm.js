import React from "react";
import {NavLink} from 'react-router-dom';
import search from 'youtube-search';

const API = "AIzaSyBXG9136nZWLlsZyh9MmHvMmmzfEgs5XUA";

export default class SearchForm extends React.Component {
  search(ev) {
    ev.preventDefault();
    search(this.textSearch.value, {key: API, maxResults: '10'}, (err, data) => {
      if(err) return console.log(err);
      else this.props.initState(data);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search.bind(this)}>
          <input type="text" ref={input => this.textSearch = input}/>
          <button>Search</button>
        </form>
        {this.props.videos.map((video, index) => {
          return(
            <List video={video} key={index}/>
          );
        })}
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    let {video} = this.props;
    return (
      <div className="video">
        <NavLink to={`/video/${video.id}`}>
          <h4>{video.title}</h4>
          <img src={video.thumbnails.medium.url} alt="video"/>
        </NavLink>
      </div>
    );
  }
}