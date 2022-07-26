import React from "react";
import "./RegisterPage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Đăng ký</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    autoComplete="true"
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    autoComplete="true"
                    type="password"
                    name="password"
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" name="name" placeholder="Họ" />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Tên"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1"></input>
                  <label htmlFor="rd1">Nam</label>
                  <input type="radio" name="radiogroup1" id="rd2"></input>
                  <label htmlFor="rd2">Nữ</label>
                  <input type="radio" name="radiogroup1" id="rd3"></input>
                  <label htmlFor="rd3">Khác</label>
                </div>
                <div className="input_field select_option">
                  <select>
                    <option>Chọn một quốc gia</option>
                    <option>Việt Nam</option>
                    <option>Anh</option>
                    <option>Mỹ</option>
                    <option>Pháp</option>
                    <option>Lào</option>
                  </select>
                  <div className="select_arrow"></div>
                </div>
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1"></input>
                  <label>
                    Bạn đồng ý với các <span className="terms">điều khoản</span>{" "}
                    và <span className="terms">điều kiện</span> của chúng tôi?
                  </label>
                </div>
                <input className="button" type="submit" value="Đăng ký" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
