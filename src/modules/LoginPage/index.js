import React from "react";
import "./assets/css/styles.scss";
// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { user: {}, userName: "", password: "", authenticated: null };
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

  async checkLogin() {
    const response = await fetch(
      "https://adm.dgtt.ospgroup.vn/dgtt-admin/account-managers/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          pwd: this.state.password,
          typeUsername: 0,
          uname: this.state.userName,
        }),
      }
    );

    return response.json();
  }

  componentDidMount() {
    this.checkAuthentication();
    // this.setState({ user: JSON.parse(window.localStorage.getItem("user")) });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.checkLogin().then((data) => {
      console.log(data);
      if (data.status === 200 || data.status === 201) {
        // alert(data.message);
        window.localStorage.setItem("authenticated", this.state.authenticated);
        window.localStorage.setItem("token", data.body.accessToken);
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    });
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
                  {/* <Link to="/"> */}
                  <input className="button" type="submit" value="Đăng Nhập" />
                  {/* </Link> */}
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
