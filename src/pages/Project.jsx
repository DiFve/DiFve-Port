import ProjectCard from "../component/ProjectCard";
import Tamsang from "../img/tamsang.png";
import Foody from "../img/Foody.jpg";
import ScrimApp from "../img/ScrimApp.jpg";
import ISAGApplication from "../img/Secure_register.jpg";

const Project = () => {
  return (
    <div className=" w-full bg-dark-blue1 font-mono shrink grow">
      <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProjectCard
          image={Tamsang}
          head="Tamsang-Tamsong"
          p1="Website for food delivery"
          p2="co-op with CU and ThaiHealth"
          link="https://www.xn----5wfb7cc3ed2ee9dig6zg.com/"
        />

        <ProjectCard
          image={ISAGApplication}
          head="ISAG Register 2022"
          p1="Booking ticket website for"
          p2="event ISAG Secure First #7"
          link="https://github.com/DiFve/ISAG-Application-2022"
        />

        <ProjectCard
          image={Foody}
          head="Foody Front-end"
          p1="Front-end for Foody-webapp"
          p2="developed by React TS"
          link="https://github.com/DiFve/Restaurant-management-system-frontend"
        />

        <ProjectCard
          image={Foody}
          head="Foody Back-end"
          p1="Back-end for Foody-webapp"
          p2="developed by Express NodeJS"
          link="https://github.com/DiFve/Restaurant-management-system-backend"
        />

        <ProjectCard
          image={ScrimApp}
          head="Scrim Application"
          p1="Web-App for match two E-sport"
          p2="team to practice"
          link="https://github.com/DiFve/ScrimApp"
        />
      </div>
    </div>
  );
};

export default Project;
