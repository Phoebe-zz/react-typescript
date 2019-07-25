import * as React from "react";
import Img1 from "../assets/111.jpg";
import Img2 from "../assets/222.jpg";
import "../styles/Itemsty.css";

interface iprops {
  item: any;
}

class Item extends React.Component<iprops> {
  public render() {
    return (
      <div className="Item">
        <img src={this.props.item.id > 1 ? Img1 : Img2} alt="" />

        <div className="tem">{this.props.item.tem}</div>
        <div className="limit">{this.props.item.limi}</div>
        <div className="tui">{this.props.item.tui}</div>
        <div className="experiment">预订须知</div>
        <div className="pricetitle1">¥</div>
        <div className="price">{this.props.item.price}</div>
        <div className="pricetitle2">起</div>
        <button>购买</button>
      </div>
    );
  }
}

export default Item;
