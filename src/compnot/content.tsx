import * as React from "react";
import ItemList from "./itemList";
import "../styles/content.css";
import Img4 from "../assets/购票2.png";
import Img5 from "../assets/地址.png";
import Img6 from "../assets/导航.png";
import Img7 from "../assets/景点介绍.png";
import Img8 from "../assets/热门景点.png";
import Img9 from "../assets/特产商城.png";
import Img10 from "../assets/购票须知.png";

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
              <div className="but">
                <button>
                  <img src={Img7} alt="" />
                </button>
              </div>
              <div className="but">
                <button>
                  <img src={Img8} alt="" />
                </button>
              </div>
              <div className="but">
                <button>
                  <img src={Img9} alt="" />
                </button>
              </div>
              <div className="but">
                <button>
                  <img src={Img10} alt="" />
                </button>
              </div>
            </div>
            <div className="message">
              <div className="adjust" />
              <div className="butt">景区介绍</div>
              <div className="butt">热门景点</div>
              <div className="butt">购票须知</div>
              <div className="butt">特产购物</div>
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
