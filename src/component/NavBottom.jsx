import { useState } from "react";
import { Link } from "react-router-dom";
import fbLogo from "../img/fb.png";
import githubLogo from "../img/github-logo.png";
import linkedinLogo from "../img/linkedin.png";

const NavBottom = () => {
  return (
    <div>
      <div className="font-mono flex flex-row h-12 w-full font-medium bg-dark-blue1 text-slate-400 text-base justify-between border-t-2 border-slate-600">
        <div className="flex flex-row border-slate-600 basis-1/2">
          <label
            className={`basis-1/6 border-r-2 pt-[12px] border-slate-600 text-center `}
          >
            find me in:
          </label>

          <div className="basis-[7%] border-r-2 border-slate-600 flex flex-col justify-center items-center ">
            <a href="https://www.facebook.com/nhermak.praditpong">
              <img src={fbLogo} className="h-[24px] w-[24px]" />
            </a>
          </div>

          <div className="basis-[7%] border-r-2 border-slate-600 flex flex-col justify-center items-center ">
            <a href="https://github.com/DiFve">
              <img src={githubLogo} className="h-[24px] w-[24px]" />
            </a>
          </div>

          <div className="basis-[7%] border-r-2 border-slate-600 flex flex-col justify-center items-center ">
            <a href="https://www.linkedin.com/in/manhermak-praditpong-67674621b/">
              <img src={linkedinLogo} className="h-[24px] w-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
