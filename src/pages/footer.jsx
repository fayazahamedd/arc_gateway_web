import {
  FaFacebook,
  FaInbox,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MainIcon } from "../assets/icons";
import { FaLocationPin, FaVoicemail } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex mb-2 justify-between items-center w-full">
        <div className="flex ml-12">
          <img src={MainIcon} alt="icon" className="h-12" />
        </div>

        <div className="flex justify-between items-center text-black font-semibold">
          <p className="flex ">Our Story</p>
          <p className="flex mx-8">Project</p>
          <p className="flex ">Our Story</p>
        </div>

        <div className="flex items-center justify-center mr-7 border border-black rounded-md p-3">
          <p className="text-black font-bold mr-3 ml-2">Stay Connected</p>

          <div className="flex bg-[#002F70]">
            <FaFacebook className="h-10 w-10 py-1 px-2 rounded-md text-white" />
          </div>

          <div className="flex bg-[#002F70] mx-2">
            <FaTwitter className="h-10 w-10 py-1 px-2 rounded-md text-white" />
          </div>

          <div className="flex bg-[#002F70] mr-2">
            <FaLinkedin className="h-10 w-10 py-1 px-2 rounded-md text-white" />
          </div>
        </div>
      </div>
      <div className="flex bg-black ml-11 mr-6 h-[1px] my-6"></div>

      <div className="flex justify-between mx-12 mb-4 mr-6">
        <div className="flex">
          <div className="flex">
            <FaMailBulk className="mt-1 mr-3" />
            hello@arcconstructions.com
          </div>
          

          <div className="flex mx-4">
            <FaPhone className="mt-1 mr-2" />
            +91 91813 23 2309
          </div>

          <div className="flex">
            <FaLocationPin className="mt-1 mr-2" />
            Location
          </div>
        </div>

        <div className="flex">
          <p>© 2024 ARC Constrtuctions. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
