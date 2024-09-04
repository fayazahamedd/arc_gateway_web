import { FaArrowUp } from "react-icons/fa";
import { MainIcon } from "../assets/icons";

const Home = () => {
  return (
    <div className="h-[100vh] ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcfejifrx/image/upload/v1725352407/dashboard_xiopna.jpg')",
        }}
      ></div>

      <div className="relative mt-10 top-0 left-0 right-0 z-10 bg-white mx-12 px-6 py-2 rounded-2xl flex items-center justify-between">
        <div className="">
          <img src={MainIcon} alt="img" className="h-16 w-full" />
        </div>
        <div className="flex items-center justify-around mr-2">
          <p className="text-base mr-6">Our Story</p>
          <p className="text-base mr-6">Projects</p>
          <p className="border p-3 rounded-lg">Get in touch</p>
        </div>
      </div>

      <div className="px-12 relative text-white mt-[8%]">
        <p className="text-6xl font-extrabold">A gateway to</p>
        <p className="text-6xl font-extrabold">your future</p>
      </div>

      <div className="relative px-12 mt-[6%] flex">
        <button className="flex px-3 py-3 text-[#002F70] rounded-lg bg-white hover:bg-gray-300 ml-1">
          Know more
          <FaArrowUp className="ml-2 mt-1 text-[#002F70] text-sm rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default Home;
