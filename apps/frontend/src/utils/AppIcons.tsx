import { SvgIcon } from "@mui/material";
import React from "react";
interface AppIconsProps {
  app: string;
}
const AppIcons = ({ app }: AppIconsProps) => {
  const getAppIcon = () => {
    const appIconsMap: { [key: string]: React.FC } = {
      sounds: soundsSvg,
      news: newsSvg,
      iplayer: iplayerSvg,
    };
    const SVGIcon = appIconsMap[app] || null;
    return SVGIcon ? <SVGIcon /> : null;
  };
  return (
    <SvgIcon
      sx={{
        svg: {
          width: 32, // Set width to 32px
          height: 32, // Set height to 32px
        },
      }}
    >
      {getAppIcon()}
    </SvgIcon>
  );
};

export default AppIcons;

const soundsSvg = () => {
  return (
    <svg
    viewBox="0 0 336 336"
    width="1em"
    height="1em"
    focusable="false"
    aria-hidden="true"
    >
      {" "}
      <g>
        {" "}
        <path
          fill="#A13104"
          d="M122,304H78c-0.552,0-1.052-0.224-1.414-0.586S76,302.552,76,302v-92c0-0.552,0.224-1.052,0.586-1.414
                                                S77.448,208,78,208h44c0.552,0,1.052,0.224,1.414,0.586S124,209.448,124,210v92c0,0.552-0.224,1.052-0.586,1.414
                                                S122.552,304,122,304z"
        ></path>{" "}
        <path
          fill="#D24712"
          d="M230,376h-80c-0.552,0-1.052-0.224-1.414-0.586S148,374.552,148,374V138c0-0.552,0.224-1.052,0.586-1.414
                                                S149.448,136,150,136h80c0.552,0,1.052,0.224,1.414,0.586S232,137.448,232,138v236c0,0.552-0.224,1.052-0.586,1.414
                                                S230.552,376,230,376z"
        ></path>{" "}
        <path
          fill="#FA6400"
          d="M422,424H258c-0.552,0-1.052-0.224-1.414-0.586S256,422.552,256,422V90c0-0.552,0.224-1.052,0.586-1.414
                                                S257.448,88,258,88h164c0.552,0,1.052,0.224,1.414,0.586S424,89.448,424,90v332c0,0.552-0.224,1.052-0.586,1.414
                                                S422.552,424,422,424z"
        ></path>{" "}
      </g>{" "}
    </svg>
  );
};

const newsSvg = () => {
  return (
    <svg
      viewBox="0 0 336 336"
      width="1em"
      height="1em"
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path
          fill="#B80000"
          d="M214,336h-68c-0.6,0-1.1-0.2-1.4-0.6s-0.6-0.9-0.6-1.4V218c0-0.6,0.2-1.1,0.6-1.4s0.9-0.6,1.4-0.6h68 c0.6,0,1.1,0.2,1.4,0.6s0.6,0.9,0.6,1.4v116c0,0.6-0.2,1.1-0.6,1.4S214.6,336,214,336z"
        ></path>
        <path
          fill="#EB0000"
          d="M334,192H146c-0.6,0-1.1-0.2-1.4-0.6s-0.6-0.9-0.6-1.4V2c0-0.6,0.2-1.1,0.6-1.4S145.4,0,146,0h188 c0.6,0,1.1,0.2,1.4,0.6S336,1.4,336,2v188c0,0.6-0.2,1.1-0.6,1.4S334.6,192,334,192z"
        ></path>
        <path
          fill="#D30000"
          d="M118,240H2c-0.6,0-1.1-0.2-1.4-0.6S0,238.6,0,238V122c0-0.6,0.2-1.1,0.6-1.4S1.4,120,2,120h116 c0.6,0,1.1,0.2,1.4,0.6s0.6,0.9,0.6,1.4v116c0,0.6-0.2,1.1-0.6,1.4S118.6,240,118,240z"
        ></path>
      </g>
    </svg>
  );
};

const iplayerSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
       width="1em"
      height="1em"
      enable-background="new 0 0 512 512"
    >
      <g>
        <path
          fill="#FF4C98"
          d="M182,358h-68c-0.55,0-1.05-0.225-1.412-0.587C112.225,357.05,112,356.55,112,356V156
		c0-0.552,0.224-1.052,0.586-1.414S113.448,154,114,154h68c0.55,0,1.05,0.225,1.413,0.587C183.775,154.95,184,155.45,184,156v200
		c0,0.552-0.224,1.052-0.586,1.414S182.552,358,182,358z"
        />
        <g>
          <path
            fill="#FF4C98"
            d="M372.106,248.243l34-58.89c0.275-0.476,0.33-1.022,0.197-1.517c-0.133-0.495-0.453-0.94-0.93-1.215
			l-173.205-100c-0.478-0.276-1.023-0.332-1.518-0.2c-0.494,0.132-0.938,0.454-1.214,0.932l-34,58.89
			c-0.275,0.476-0.33,1.022-0.197,1.517c0.133,0.495,0.453,0.94,0.93,1.215l173.205,100c0.478,0.276,1.023,0.332,1.518,0.2
			C371.386,249.042,371.83,248.721,372.106,248.243z"
          />
          <path
            fill="#FF4C98"
            d="M372.106,263.757l34,58.89c0.275,0.476,0.33,1.022,0.197,1.517c-0.133,0.495-0.453,0.94-0.93,1.215
			l-173.205,100c-0.478,0.276-1.023,0.332-1.518,0.2c-0.494-0.132-0.938-0.454-1.214-0.932l-34-58.89
			c-0.275-0.476-0.33-1.022-0.197-1.517c0.133-0.495,0.453-0.94,0.93-1.215l173.205-100c0.478-0.276,1.023-0.332,1.518-0.2
			C371.386,262.958,371.83,263.279,372.106,263.757z"
          />
        </g>
      </g>
    </svg>
  );
};
