import React from "react";
import Item from "./Item";
import "../styles/Itemsty.scss";
import { observable } from "mobx";
import {observer} from 'mobx-react'


@observer
class itemList extends React.Component {
  public render() {
    return (
      <div className="ticket">
        <div className="sign" />
        <div className="buyticket">购票</div>
        <div className="clea" />
        <div>
          {items.map((item, id) => (
            <Item key={id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

let items = observable([
  {
    id: 1,
    tem: "成人票",
    limi: "23:30之前可定明日",
    tui: "随时退",
    price: 120,
  },
  {
    id: 2,
    tem: "学生票",
    limi: "23:30之前可定明日",
    tui: "随时退",
    price: 120,
  },
]);
export default itemList;
