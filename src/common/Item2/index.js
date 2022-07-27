import React from "react";
import "./styles.scss";

class Item2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content_item-mobile">
        <div className="content_item-mobile-icon">HOT</div>
        <div className="content_item-mobile-tittle">6CS50</div>
        <div className="content_item-mobile-description">
          <p>8GB tốc độ cao</p>
          <p>30 phút nội mạng</p>
          <p>120.000VNĐ</p>
          <p>30 ngày</p>
        </div>
        <div className="content_item-mobile-actions">
          <button className="btn-detail">Xem chi tiết</button>
          <button className="btn-signup">Đăng ký</button>
        </div>
      </div>
    );
  }
}

export default Item2;
