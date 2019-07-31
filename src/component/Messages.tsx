import * as React from "react";
import { observable } from "mobx";

class Messages extends React.Component {
  render() {
    return (
      <div>
        {messages.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}
let messages = observable(["景区介绍", "热门景点", "购票须知", "特产购物"]);

export default Messages;
