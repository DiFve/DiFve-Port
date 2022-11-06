import me from "../img/3D Jark.jpeg";

const HomeDesktop = () => {
  return (
    <div className="hidden  md:block">
      <div className="flex md:flex-row justify-center items-center py-6 pl-6">
        <div className="w-96 ">
          <img className="rounded-xl object-cover w-full" src={me} />
        </div>
        <div className="pl-[10%] flex flex-col">
          <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
            {">"}&nbsp;hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Manhermak 👋<span className="text-3xl md:text-5xl"></span>
              </span>
              <div className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-dark-blue1 w-full animate-type will-change`}">
                <div className="h-full w-[1%] bg-slate-400"></div>
              </div>
            </span>
          </h1>
          <h1 className="text-[#4d5bce] text-4xl">
            {" "}
            {">"} Full-stack Developer
          </h1>

          <h1 className="pt-[81px] text-[#607B96] font-mono">
            // you can contact me @
          </h1>

          <div className="flex flex-col font-mono">
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
    </div>
  );
};

export default HomeDesktop;
