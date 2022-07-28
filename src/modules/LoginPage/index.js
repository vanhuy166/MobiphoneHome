import React from "react";
import "./assets/css/styles.scss";
import { Link } from "react-router-dom";
import { Prompt } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Đăng nhập</h2>
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
                      placeholder="Email hoặc Số điện thoại"
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

                  <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb1"></input>
                    <label htmlFor="cb1">Nhớ mật khẩu</label>
                    <label className="terms">Quên mật khẩu?</label>
                  </div>
                  <Link to="/">
                    <input className="button" type="submit" value="Đăng Nhập" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
