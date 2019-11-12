import React, { Component } from 'react';
import { connect } from 'react-redux';
import PinnedPostsContainer from './PinnedPostsContainer';
import '../style/Profile.scss';

const Profile = ({ username, avatar_img }) => {

    return (
      <div className="profile-container">
      <h1>FEED</h1>
      <h3>Welcome {username}</h3>
      <img src={avatar_img} height='240' width='240' alt="avatar"/>
      <PinnedPostsContainer />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    username: state.currentUser.username,
    avatar_img: state.currentUser.avatar_img,
  }
}

export default connect(mapStateToProps)(Profile)
