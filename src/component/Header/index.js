import React from "react";
import images from "../../assets/image";
import "./Header.scss";

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
          <a href="#">{item}</a>
        </li>
      );
    });

    return (
      <header className="header">
        <div className="header-logo">
          <a href="index.html">
            <img src={images.logo} alt="logo"></img>
          </a>
        </div>

        {/* Menu PC */}
        <div className="header_menu">
          <div className="header_menu-option">
            <ul>{listItems}</ul>
          </div>
          <div className="header_menu-right">
            <div className="header_menu-right-login">Đăng nhập</div>
            <div className="header_menu-right-signup">Đăng ký</div>
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
              <li className="active1">
                <a href="#">Đăng nhập </a>
              </li>
              <li className="active1">
                <a href="#">Đăng ký </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
