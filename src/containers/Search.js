import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import {initState} from "./../actions/searchActions";

import SearchForm from "./../components/SearchForm";

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchForm initState={this.props.initState} videos={this.props.videos}/>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    videos: state.getVideos
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initState: initState
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));