import React from "react";
import "./assets/css/styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import * as loginService from "./api";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      authenticated: null,
      showPass: false,
      typeInput: "password",
    };
  }

  checkAuthentication() {
    const authenticated = true;
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginService.login(
      this.state.userName,
      this.state.password
    );
    console.log(data);
    if (data) {
      window.localStorage.setItem("authenticated", this.state.authenticated);
      window.localStorage.setItem("token", data.body.accessToken);
      window.location.href = "/";
    } else {
      alert("Đăng nhập thất bại! Vui lòng kiểm tra thông tin đăng nhập.");
    }
  };

  handleChangeUser = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleChangePass = (event) => {
    this.setState({ password: event.target.value });
  };

  handleShowPass = () => {
    if (this.state.typeInput === "password") {
      this.setState({ showPass: !this.state.showPass, typeInput: "text" });
    } else {
      this.setState({ showPass: !this.state.showPass, typeInput: "password" });
    }
  };

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
                <form onSubmit={this.handleSubmit}>
                  <div className="input_field">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email hoặc Số điện thoại"
                      required
                      value={this.state.userName}
                      onChange={this.handleChangeUser}
                    />
                  </div>
                  <div className="input_field">
                    <span>
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      autoComplete="true"
                      type={this.state.typeInput}
                      name="password"
                      placeholder="Mật khẩu"
                      required
                      value={this.state.password}
                      onChange={this.handleChangePass}
                    />
                    <p className="icon_pw" onClick={this.handleShowPass}>
                      {this.state.showPass ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </p>
                  </div>
                  <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb1"></input>
                    <label htmlFor="cb1">Nhớ mật khẩu</label>
                    <label className="terms">Quên mật khẩu?</label>
                  </div>
                  <input className="button" type="submit" value="Đăng Nhập" />
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
