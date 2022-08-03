import React from "react";
import "./styles.scss";

import images from "../../assets/images";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={images.OSP} alt=""></img>
        </div>
        <div className="footer-content">
          <div className="footer-info">
            <h4> Thông tin chung</h4>
            <p>
              <br></br>Giới thiệu
              <br></br> Hướng dẫn tham gia
              <br></br>Chính sách hoa hồng
              <br></br>Danh sách điểm hòa mạng
              <br></br>Các câu hỏi thường gặp
            </p>
          </div>
          <div className="footer-contact">
            <h4> Liên hệ </h4>
            <p>
              <br></br>Website: congtacvien.mobifone.vn
              <br></br>Hotline: 0987.654.321
              <br></br>Email: congtacvien.mobifone@osp.com.vn
            </p>
          </div>
        </div>
        <div className="footer-social">
          <img src={images.mobifone} alt=""></img>
          <p>
            Chương trình Tiếp thị liên kết từ
            <br></br>Cộng tác viên MobiFone với mức hoa hồng <br></br> hấp dẫn!
          </p>
          <div className="footer-social_item">
            <img src={images.logo_telegram} alt=""></img>
            <img src={images.logo_zalo} alt=""></img>
            <img src={images.logo_fb} alt=""></img>
            <img src={images.logo_twitter} alt=""></img>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2015 CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ OSP | Địa chỉ:
          Tầng 7, Toà Nhà Đại Phát, số 82, Phố Duy Tân, Cầu Giấy, Hà Nội. | Điện
          thoại: +84-24-3568 2502 - Fax: +84-24-3568 2504
        </p>
      </div>

      <div className="footer-btnTop">
        <img src={images.backTop} alt=""></img>
      </div>
    </div>
  );
}

export default Footer;
