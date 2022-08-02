import React from "react";
import { Link } from "react-router-dom";

import images from "../../assets/images";
import { publicRoutes } from "../../router/combineRoutes.js";

import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickMenu: 0,
      mobile: false,
      token: localStorage.getItem("token"),
    };
  }

  handleClickMenu = (index) => {
    this.setState({ clickMenu: index, mobile: false });
  };

  handleClickMenuMobile = () => {
    this.setState({ mobile: !this.state.mobile });
  };

  handleLogOut = () => {
    localStorage.removeItem("token");
    this.setState({ token: "" });
    this.handleClickMenuMobile();
  };

  render() {
    const arrayList = ["Trang chủ", "Sim số", "Gói cước", "Tin tức", "Hỗ trợ"];
    const listItems = arrayList.map((item, index) => {
      return (
        <li
          onClick={() => {
            this.handleClickMenu(index);
          }}
          className={this.state.clickMenu === index ? "active" : ""}
          key={index}
        >
          <Link to={publicRoutes[index].path}>{item}</Link>
        </li>
      );
    });

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
            <ul>{listItems}</ul>
          </div>
          <div className="header_menu-right">
            {!this.state.token ? (
              <>
                <Link to="/login">
                  <div className="header_menu-right-login">Đăng nhập</div>
                </Link>

                <Link to="/register">
                  <div className="header_menu-right-signup">Đăng ký</div>
                </Link>
              </>
            ) : (
              <Link to="/">
                <div className="header_menu-right-user">
                  <img
                    src="https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg"
                    alt="User"
                    className="header_menu-right-user-img"
                  ></img>
                  <p>Nguyễn Văn Huy</p>
                  <ul className="sub-menu">
                    <Link to="/profile">
                      <li>Thông tin tài khoản</li>
                    </Link>
                    <li onClick={this.handleLogOut}>Đăng xuất</li>
                  </ul>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* menu moblie */}

        <div className="header_menu-mobile">
          <div
            onClick={this.handleClickMenuMobile}
            className="header_menu-mobile-icon"
          >
            {this.state.mobile ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <div
            className={
              this.state.mobile
                ? "header_menu-mobile-content open"
                : "header_menu-mobile-content"
            }
          >
            <ul>
              {listItems}

              {!this.state.token ? (
                <>
                  <li className="active1" onClick={this.handleClickMenuMobile}>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                  <li className="active1" onClick={this.handleClickMenuMobile}>
                    <Link to="/register">Đăng ký</Link>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={this.handleClickMenuMobile}>
                    <Link to="/profile">
                      <div className="header_menu-mobile-user">
                        <img
                          src="https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg"
                          alt="User"
                          className="header_menu-mobile-user-img"
                        ></img>
                        <p>Nguyễn Văn Huy</p>
                      </div>
                    </Link>
                  </li>

                  <li className="active1" onClick={this.handleLogOut}>
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
}

export default Header;
