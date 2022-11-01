import { Link } from "react-router-dom";
const ProjectCard = (props) => {
  const { image, head, p1, p2, link } = props;
  return (
    <div class="bg-[#011221] my-10 rounded-lg border border-gray-600 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[360px] w-72">
      <img
        class="rounded-t-lg w-full h-56 border-gray-300 border-b"
        src={image}
        alt=""
      />
      <div className="text-[#607B96] flex flex-col justify-center items-center mt-2 w-full">
        <div className="text-[#5565E8] text-2xl font-bold">{head}</div>
        <p>{p1}</p>
        <p>{p2}</p>
        <a
          className="mt-1 px-2 py-1 rounded-lg bg-[#1c2b3a] text-white"
          href={link}
          target="_blank"
        >
          view-project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
