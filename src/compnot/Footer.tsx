import * as React from "react";
import "../styles/Footer.css";

class Header extends React.Component {
  public render() {
    return (
      <div>
        <div className="foot">
          <div className="left">
            <img src={require("../assets/icon_ticket_select.png")} alt="" />
            <div className="word">首页</div>
          </div>
          <div className="right">
            <img src={require("../assets/icon_me.png")} alt="" />
            <div className="word">我的</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
