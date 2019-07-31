import * as React from "react";
import ItemList from "./itemList";
import "../styles/content.scss";
import Img4 from "../assets/购票2.png";
import Img5 from "../assets/地址.png";
import Img6 from "../assets/导航.png";
import Btn from "./Btn";
import Messages from "../component/Messages";

class Content extends React.Component {
  public render() {
    return (
      <div>
        <div className="conten">
          <div className="detail">
            <div className="title">白马山 · 天尺情缘景区</div>
            <div className="timede">
              <img src={Img4} alt="" />
              <div className="time">开放时间：</div>
              <div className="opentime">{opentime}</div>
            </div>
            <div className="timede">
              <img src={Img5} alt="" />
              <div className="adress">{adress}</div>
              <div className="adressbutt">
                <img src={Img6} alt="" />
              </div>
            </div>
            <div className="extral">
              <Btn />
              <div className="message">
                <div className="adjust" />
                <div className="butt">
                  <Messages />
                </div>
              </div>
            </div>
          </div>
          <ItemList />
          <div className="filler"> </div>
        </div>
      </div>
    );
  }
}
let opentime = "9:00～18:00";
let adress = "重庆市 武隆区 白马山景区游客中心";
export default Content;
