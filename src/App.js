import "./App.scss";
import React from "react";
import { Header, Footer, Section, Item1, Item2, Item3 } from "./component";

import images from "./assets/image";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>

        <div className="slider">
          <img src={images.slider} alt="slider"></img>
        </div>

        <div className="container">
          <Section
            title="CHƯƠNG TRÌNH AFFILIATE"
            description="Tham gia kiếm tiền cùng Cộng tác viên MobiFone"
          >
            <Item1
              image={images.image1}
              title="Chính sách hoa hồng"
              description="Cộng tác viên MobiFone luôn phát triển chính sách Hoa hồng hấp dẫn.
              Cam kết rõ ràng, minh bạch, chính xác, kịp thời trong thanh toán và
              ghi nhận doanh thu cho mạng lưới CTV và đối tác bán hàng"
            ></Item1>
            <Item1
              image={images.image2}
              title="Thu nhập không giới hạn"
              description=" Chỉ cần bạn đầu tư thời gian, thu nhập của bạn là không giới hạn. Cộng tác viên MobiFone thường xuyên
              cung cấp sản phẩm dịch vụ mới thúc đẩy doanh số hỗ trợ CTV phát triển kinh doanh và gia tăng thu nhập"
            ></Item1>
            <Item1
              image={images.image3}
              title="Đa dạng dịch vụ"
              description="Sản phẩm, dịch vụ có trên Cộng tác viên MobiFone luôn được cập nhật kịp thời, đảm bảo tính đa dạng, dễ
              kinh doanh và nhiều ưu đãi. Đây cũng là những dịch vụ viễn thông - sản phẩm thông minh tốt nhất hiện nay"
            ></Item1>
          </Section>
          <Section title="GÓI CƯỚC DI ĐỘNG" option bgGray>
            <Item2></Item2>
            <Item2></Item2>
            <Item2></Item2>
            <Item2></Item2>
          </Section>
          <Section title="SIM SỐ - CHỌN SỐ ONLINE">
            <Item3
              image={images.icon1}
              title="Sim theo tên"
              description="Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, 
              giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,...."
            ></Item3>
            <Item3
              image={images.icon2}
              title="Sim số đẹp"
              description="Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, 
            giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,...."
            ></Item3>
            <Item3
              image={images.icon3}
              title="Sim phong thủy"
              description="Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, 
          giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,...."
            ></Item3>
            <Item3
              active
              image={images.icon4}
              title="Sim đôi"
              description="Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, 
        giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,...."
            ></Item3>
          </Section>
        </div>

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
            từ sự ảnh hưởng của bạn trên Internet. Với sự bảo đảm và hỗ trợ
            chuyên nghiệp từ Cộng tác viên MobiFone
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
      </div>
    );
  }
}

export default App;
