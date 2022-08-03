/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.scss";

import images from "../../assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [mobile, setMobile] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const handleClickMenuMobile = () => {
    setMobile(!mobile);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    handleClickMenuMobile();
    navigate("/");
  };

  const listMenuItems = (
    <>
      <li onClick={handleClickMenuMobile}>
        <NavLink to={"/"}>Trang chủ</NavLink>
      </li>
      <li onClick={handleClickMenuMobile}>
        <NavLink to={"/number"}>Sim số</NavLink>
      </li>
      <li onClick={handleClickMenuMobile}>
        <NavLink to={"/data"}>Gói cước</NavLink>
      </li>
      <li onClick={handleClickMenuMobile}>
        <NavLink to={"/news"}>Tin tức</NavLink>
      </li>
      <li onClick={handleClickMenuMobile}>
        <NavLink to={"/support"}>Hỗ trợ</NavLink>
      </li>
    </>
  );

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={images.logo} alt="logo"></img>
        </Link>
      </div>

      {/* Menu PC */}
      <div className="header_menu">
        <div className="header_menu-option">
          <ul>{listMenuItems}</ul>
        </div>
        <div className="header_menu-right">
          {!token ? (
            <>
              <Link to="/login">
                <div className="header_menu-right-login">Đăng nhập</div>
              </Link>

              <Link to="/register">
                <div className="header_menu-right-signup">Đăng ký</div>
              </Link>
            </>
          ) : (
            <div className="header_menu-right-user">
              <img
                src="https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg"
                alt="User"
                className="header_menu-right-user-img"
              ></img>
              <p>Nguyễn Văn Huy</p>
              <ul className="sub-menu">
                <li>
                  <NavLink to="/profile">Thông tin tài khoản</NavLink>
                </li>
                <li onClick={handleLogOut}>
                  <a>Đăng xuất</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* menu moblie */}

      <div className="header_menu-mobile">
        <div
          onClick={handleClickMenuMobile}
          className="header_menu-mobile-icon"
        >
          {mobile ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div
          className={
            mobile
              ? "header_menu-mobile-content open"
              : "header_menu-mobile-content"
          }
        >
          <ul>
            {listMenuItems}
            {!token ? (
              <>
                <li className="active1" onClick={handleClickMenuMobile}>
                  <NavLink to="/login">Đăng nhập</NavLink>
                </li>
                <li className="active1" onClick={handleClickMenuMobile}>
                  <NavLink to="/register">Đăng ký</NavLink>
                </li>
              </>
            ) : (
              <>
                <li onClick={handleClickMenuMobile}>
                  <NavLink to="/profile">
                    <div className="header_menu-mobile-user">
                      <img
                        src="https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg"
                        alt="User"
                        className="header_menu-mobile-user-img"
                      ></img>
                      <p>Nguyễn Văn Huy</p>
                    </div>
                  </NavLink>
                </li>

                <li className="active1" onClick={handleLogOut}>
                  Đăng xuất
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
