import React from "react";
import "./styles.scss";

import images from "../../assets/images";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { option: 0 };
  }

  handleOption = (index) => {
    this.setState({
      option: index,
    });
  };

  render() {
    const arrayOption = ["Gói hot", "Trả sau", "Trả trước", "Data"];

    return (
      <div
        className={
          this.props.bgGray === true
            ? "section-wrapper bg-gray"
            : "section-wrapper"
        }
      >
        <div className="section">
          <div className="section-title">
            <h2>{this.props.title}</h2>
            {this.props.description && <p>{this.props.description}</p>}
            {this.props.option && (
              <div className="section-option">
                {arrayOption.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => this.handleOption(index)}
                      className={
                        this.state.option === index
                          ? "section-option-item active"
                          : "section-option-item"
                      }
                    >
                      {item}
                    </button>
                  );
                })}

                <div
                  className="section-option_btn btn-left"
                  style={{ backgroundImage: `url("${images.btnLeft}")` }}
                ></div>
                <div
                  className="section-option_btn btn-right"
                  style={{ backgroundImage: `url("${images.btnLeft}")` }}
                ></div>
              </div>
            )}
          </div>
          <div className="section-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Section;
