import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import { getData } from "../actions/fetchdata";

class FriendsListView extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Hi
        {/* <FriendsList /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ friends }) => ({
  friends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsListView)
);
