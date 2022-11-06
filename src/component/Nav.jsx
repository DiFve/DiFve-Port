import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [home, setHome] = useState(true);
  const [project, setProject] = useState(false);
  const [cert, setCert] = useState(false);

  const onClickHome = () => {
    setHome(true);

    setProject(false);
    setCert(false);
  };

  const onClickProject = () => {
    setHome(false);

    setProject(true);
    setCert(false);
  };

  const onClickCert = () => {
    setHome(false);
    setProject(false);
    setCert(true);
  };
  return (
    <div className="shrink grow-0 basis-auto">
      <div className="font-mono flex flex-row h-12 w-full font-medium bg-dark-blue1 text-slate-400 text-base justify-between border-b-2 border-slate-600">
        <div className="flex flex-row border-slate-600 h-full">
          <Link
            to="/"
            className={`px-6 border-r-2 pt-[12px] border-slate-600 text-center hover:text-white ${
              home && "border-b-4 border-b-amber-400"
            }`}
            onClick={onClickHome}
          >
            <label>_hello</label>
          </Link>

          <Link
            to="/project"
            className={`px-6 border-r-2 pt-[12px] border-slate-600 text-center hover:text-white ${
              project && "border-b-4 border-b-amber-400"
            }`}
            onClick={onClickProject}
          >
            <label>_projects</label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
