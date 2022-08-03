import React from "react";
import { Header, Footer } from "../../layouts";

import "./styles.scss";

import images from "../../assets/images";

function DefaultLayout(props) {
  return (
    <>
      <Header></Header>
      <div className="slider">
        <img src={images.slider} alt="slider"></img>
      </div>

      <div className="container">{props.children}</div>

      <div
        className="contact"
        style={{ backgroundImage: `url("${images.background}")` }}
      >
        <img className="contact_img" src={images.human} alt=""></img>
        <p className="contact_title">
          Đăng ký, hợp tác cùng Cộng tác viên MobiFone ngay từ hôm nay!
        </p>
        <p className="contact_description">
          Hoàn toàn miễn phí. Chỉ trong 01 phút. Để có thêm nguồn thu nhập mới
          từ sự ảnh hưởng của bạn trên Internet. Với sự bảo đảm và hỗ trợ chuyên
          nghiệp từ Cộng tác viên MobiFone
        </p>
        <button className="contact_btn">
          <span>Đăng ký miễn phí</span>
        </button>
      </div>

      <div className="modal">
        <div className="modal_icon">
          <img src={images.icon_message} alt=""></img>
        </div>
        <div className="modal_icon">
          <img src={images.icon_phone} alt=""></img>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default DefaultLayout;
