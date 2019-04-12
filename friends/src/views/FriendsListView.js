import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import { getData } from "../actions/fetchdata";
import FriendsForm from "../components/FriendsForm";
class FriendsListView extends Component {
  componentDidMount() {
    this.props.getData();
  }

  logOut = () => {
    localStorage.clear("token");
    window.location.reload();
  };
  render() {
    console.log(this.props);

    return (
      <div className="friends-list">
        <header>
          <Link onClick={this.logOut} to="/login">
            Log Out
          </Link>
        </header>
        <FriendsList friends={this.props} />
        <FriendsForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.data.friends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsListView)
);
