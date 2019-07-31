import * as React from "react";
import Img7 from "../assets/景点介绍.png";
import Img8 from "../assets/热门景点.png";
import Img9 from "../assets/特产商城.png";
import Img10 from "../assets/购票须知.png";
import { observable } from "mobx";

class Btn extends React.Component {
  render() {
    return (
      <div>
        {Imgs.map(Imgs => (
          <button key={Imgs.id}>
            <img src={Imgs.Img} alt="" />
          </button>
        ))}
      </div>
    );
  }
}
let Imgs = observable([
  { Img: Img7, id: 1 },
  { Img: Img8, id: 2 },
  { Img: Img9, id: 3 },
  { Img: Img10, id: 4 },
]);

export default Btn;
