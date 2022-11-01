import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [home, setHome] = useState(true);
  const [info, setInfo] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  const onClickHome = () => {
    setHome(true);
    setInfo(false);
    setProject(false);
    setContact(false);
  };

  const onClickInfo = () => {
    setHome(false);
    setInfo(true);
    setProject(false);
    setContact(false);
  };

  const onClickProject = () => {
    setHome(false);
    setInfo(false);
    setProject(true);
    setContact(false);
  };

  const onClickContact = () => {
    setHome(false);
    setInfo(false);
    setProject(false);
    setContact(true);
  };
  return (
    <div className="shrink grow-0 basis-auto">
      <div className="font-mono flex flex-row h-12 w-full font-medium bg-dark-blue1 text-slate-400 text-base justify-between border-b-2 border-slate-600">
        <div className="flex flex-row border-slate-600 basis-1/2 h-full">
          <Link
            to="/"
            className={`basis-1/4 border-r-2 pt-[12px] border-slate-600 text-center hover:text-white ${
              home && "border-b-4 border-b-amber-400"
            }`}
            onClick={onClickHome}
          >
            <label>_hello</label>
          </Link>

          {/* <Link
            to="/info"
            className={`basis-1/4 border-r-2 pt-[12px] border-slate-600 text-center hover:text-white ${
              info && "border-b-4 border-b-amber-400"
            }`}
            onClick={onClickInfo}
          >
            <label>_about-me</label>
          </Link> */}

          <Link
            to="/project"
            className={`basis-1/4 border-r-2 pt-[12px] border-slate-600 text-center hover:text-white ${
              project && "border-b-4 border-b-amber-400"
            }`}
            onClick={onClickProject}
          >
            <label>_projects</label>
          </Link>
        </div>
        {/* <Link
          to="/contact"
          className={`basis-[14%] border-l-2 text-center pt-[12px] border-slate-600 hover:text-white ${
            contact && "border-b-4 border-b-amber-400"
          }`}
          onClick={onClickContact}
        >
          <label>_contact-me</label>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
