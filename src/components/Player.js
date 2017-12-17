import React from "react";
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

class Player extends React.Component {
  render() {
    //можно вывести без редакса через this.props.match.params.id
    return (
      <div className="player">
        <iframe allowFullScreen="allowFullScreen" title="Video" width="700" height="500" src={`https://youtube.com/embed/${this.props.video}?autoplay=1`}></iframe>
        <p><NavLink to="/"><button>back</button></NavLink></p>
      </div>
    );
  }
}

//src можно вытянуть еще сразу целиком, т.к. он приходит к нам от api, но он собран в строку

let mapStateToProps = (state, ownProps)=>{
  return {
    video: ownProps.match.params.id
  }
}

export default withRouter(connect(mapStateToProps)(Player));