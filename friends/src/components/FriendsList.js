import React from "react";
import Friends from "./Friends";

const FriendsList = props => {
  console.log(props);

  return (
    <div className="friend-container">
      <h1> Current Friends </h1>
      <div className="flex">
        {props.friends.friends.map(friend => {
          return <Friends key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendsList;
