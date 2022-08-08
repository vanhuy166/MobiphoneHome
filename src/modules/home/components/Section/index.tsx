import React, { useState } from "react";

import "./styles.scss";
import images from "../../../../assets/images";

interface Iprops{
  bgGray:  boolean,
  title: string,
  description: string,
  option:  boolean,
  children: React.ReactNode,
}


function Section(props:Iprops) {

  const [option, setOption] = useState<number>(0);

  const handleOption = (index:number) => {
    setOption(index);
  };

  const arrayOption = ["Gói hot", "Trả sau", "Trả trước", "Data"];

  return (
    <div
      className={
        props.bgGray === true ? "section-wrapper bg-gray" : "section-wrapper"
      }
    >
      <div className="section">
        <div className="section-title">
          <h2>{props.title}</h2>
          {props.description && <p>{props.description}</p>}
          {props.option && (
            <div className="section-option">
              {arrayOption.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleOption(index)}
                    className={
                      option === index
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
        <div className="section-content">{props.children}</div>
      </div>
    </div>
  );
}

export default Section;
