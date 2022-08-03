import React from "react";
import "./assets/css/styles.scss";

import { Section, Item1, Item2, Item3 } from "./components";
import images from "../../assets/images";

// component, purecom
function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;
