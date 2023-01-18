import React from "react";

export default function InfoUser(props) {
  console.log(props)
  return (
    <>
      <span>{props.infoUser.user}</span>
      <div>
        <img src={props.infoUser.img} ></img>
      </div>
    </>
  );
}
