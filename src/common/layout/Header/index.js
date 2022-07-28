import React from "react";
import { Link } from "react-router-dom";

import images from "../../../assets/images";
import { publicRoutes } from "../../../routes/combineRoutes.js";

import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickMenu: 0,
      mobile: false,
    };
  }

  handleClickMenu = (index) => {
    this.setState({ clickMenu: index, mobile: false });
  };

  handleClickMenuMobile = () => {
    this.setState({ mobile: !this.state.mobile });
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
            <Link to="/login">
              <div className="header_menu-right-login">Đăng nhập</div>
            </Link>
            <Link to="/register">
              <div className="header_menu-right-signup">Đăng ký</div>
            </Link>
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
              <li className="active1" onClick={this.handleClickMenuMobile}>
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li className="active1" onClick={this.handleClickMenuMobile}>
                <Link to="/register">Đăng ký</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
