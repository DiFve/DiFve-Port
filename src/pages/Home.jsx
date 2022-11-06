import HomeDesktop from "../component/HomeDesktop";
import HomeMobile from "../component/HomeMobile";

const Home = () => {
  return (
    <div className="w-full bg-dark-blue1 font-mono h-full flex flex-col ">
      <HomeDesktop />
      <HomeMobile />
    </div>
  );
};

export default Home;
