import React, { Component } from "react";
import { connect } from "react-redux";
import { postFriend } from "../actions/post";
class FriendsForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  newFriendHandler = e => {
    e.preventDefault();
    this.props.postFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    console.log(this.props);
    return (
      <form className="add-friend" onSubmit={this.newFriendHandler}>
        <h3> Add New Friend </h3>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <button> Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.data.friends,
  savingFriends: state.data.savingFriends
});

export default connect(
  mapStateToProps,
  { postFriend }
)(FriendsForm);
