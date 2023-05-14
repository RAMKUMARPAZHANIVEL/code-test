import React from "react";

import { Img, Line } from "components";

const SettingsOneSidemenu = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col gap-[32px] items-center justify-start mt-[24px] mx-[auto] w-[67%]">
          <Img
            src="images/img_frame529821_40x32.png"
            className="h-[40px] md:h-[auto] object-cover w-[67%]"
            alt="frame529821"
          />
          <div className="flex flex-col items-center justify-start w-[100%]">
            <Img
              src="images/img_home.svg"
              className="h-[48px] rounded-[4px] w-[48px]"
              alt="home"
            />
            <Img
              src="images/img_map.svg"
              className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
              alt="map"
            />
            <Img
              src="images/img_settings_teal_800.svg"
              className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
              alt="settings"
            />
            <Img
              src="images/img_star.svg"
              className="h-[48px] mt-[360px] rounded-[4px] w-[48px]"
              alt="star"
            />
            <Img
              src="images/img_question.svg"
              className="h-[48px] mt-[8px] rounded-[4px] w-[48px]"
              alt="question"
            />
          </div>
        </div>
        <Line className="bg-gray_801 h-[1px] mt-[24px] mx-[auto] w-[78%]" />
        <div className="flex h-[40px] items-center justify-start mx-[auto] my-[24px] w-[40px]">
          <div className="flex h-[40px] items-center justify-start rounded-[50%] w-[40px]">
            <Img
              src="images/img_unsplashwnolnjo7ts8.png"
              className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
              alt="unsplashwnolnjo"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

SettingsOneSidemenu.defaultProps = {};

export default SettingsOneSidemenu;
