import me from "../img/3D Jark.jpeg";
const HomeMobile = () => {
  return (
    <div className="md:hidden">
      <div className="pt-6 pl-6 flex flex-col justify-center">
        <h1 className="mb-2 font-mono text-4xl text-gray-100 ">
          {">"}&nbsp;hi, I&apos;m <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
              &nbsp;&nbsp;Manhermak 👋
              <span className="text-3xl md:text-5xl">&nbsp;</span>
            </span>
            <div className="{`${styles.cursor} absolute -bottom-0 left-6 -top-1 inline-block bg-dark-blue1 w-full animate-type will-change`}">
              <div className="h-full w-[1%] bg-slate-400"></div>
            </div>
          </span>
        </h1>
        <h1 className="text-[#4d5bce] text-2xl"> {">"} Full-stack Developer</h1>
        <div className="w-full flex flex-row justify-center mt-4">
          <img className="rounded-xl w-52 mr-6" src={me} />
        </div>
        <h1 className="pt-4 text-[#607B96] font-mono">
          // you can contact me @
        </h1>

        <div className="pb-6 flex flex-col font-mono">
          <div className="flex flex-row">
            <label className="text-[#4d5bce]"> const&nbsp;</label>
            <label className="text-[#43D9AD]"> email&nbsp;</label>
            <label className="text-white"> =&nbsp;</label>
            <label className="text-[#E99287]">"j.manhermak@gmail.com"</label>
          </div>

          <div className="flex flex-row">
            <label className="text-[#4d5bce]"> const&nbsp;</label>
            <label className="text-[#43D9AD]"> gitHub&nbsp;</label>
            <label className="text-white"> =&nbsp;</label>
            <label className="text-[#E99287]">"DiFve"</label>
          </div>

          <div className="flex flex-row">
            <label className="text-[#4d5bce]"> const&nbsp;</label>
            <label className="text-[#43D9AD]"> fb&nbsp;</label>
            <label className="text-white"> =&nbsp;</label>
            <label className="text-[#E99287]">"Manhermak Praditpong"</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;
