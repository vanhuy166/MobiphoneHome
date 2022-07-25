import React from "react";
import "./Item3.scss";

class Item3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var props = this.props;
    return (
      <div className={props.active ? "content_item3 active" : "content_item3"}>
        <img className="content_item3-image" src={props.image} alt=""></img>
        <h3
          className={
            props.active
              ? "content_item3-tittle primary"
              : "content_item3-tittle"
          }
        >
          {props.title}
        </h3>
        <p className="content_item3-description">{props.description}</p>
        <button className="btn-more">Xem thêm</button>
      </div>
    );
  }
}

export default Item3;
