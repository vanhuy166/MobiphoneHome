import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./assets/css/styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import * as loginService from "./api";

function LoginPage(props) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  useEffect(() => {
    const auth = true;
    if (auth !== authenticated) {
      setAuthenticated(auth);
      console.log("set authenticated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginService.login(userName, password);
    console.log(data);
    if (data) {
      window.localStorage.setItem("authenticated", authenticated);
      window.localStorage.setItem(
        "token",
        JSON.stringify(data.body.accessToken)
      );
      navigate("/");
    } else {
      alert("Đăng nhập thất bại! Vui lòng kiểm tra thông tin đăng nhập.");
    }
  };

  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };

  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Đăng nhập</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email hoặc Số điện thoại"
                    required
                    value={userName}
                    onChange={handleChangeUser}
                  />
                </div>
                <div className="input_field">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    autoComplete="true"
                    type={typeInput}
                    name="password"
                    placeholder="Mật khẩu"
                    required
                    value={password}
                    onChange={handleChangePass}
                  />
                  <p className="icon_pw" onClick={handleShowPass}>
                    {showPass ? (
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

export default LoginPage;
