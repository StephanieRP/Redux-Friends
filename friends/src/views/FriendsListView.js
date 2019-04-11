import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import { getData } from "../actions/fetchdata";

class FriendsListView extends Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    this.props.getData();
  }

  logOut = () => {
    localStorage.clear("token");
    window.location.reload();
  };

  changeHandler = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  newFriendHandler = e => {
    e.preventDefault();
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
        <form className="add-friend">
          <h3> Add New Friend </h3>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
          />
          <button onClick={this.newFriendHandler}> Submit</button>
        </form>
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
