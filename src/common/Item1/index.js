import React from "react";
import "./styles.scss";

class Item1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var props = this.props;
    return (
      <div className="content_item">
        <img className="content_item-image" src={props.image} alt=""></img>
        <h3 className="content_item-tittle">{props.title}</h3>
        <p className="content_item-description">{props.description}</p>
      </div>
    );
  }
}

export default Item1;
