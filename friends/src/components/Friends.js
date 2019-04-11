import React from "react";

const Friends = props => {
  console.log(props);
  return (
    <div className="friends">
      <h3> {props.friend.name} </h3>
      <p> {props.friend.email} </p>
    </div>
  );
};

export default Friends;
