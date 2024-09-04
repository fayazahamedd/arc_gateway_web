import {
  FaClock,
  FaLightbulb,
  FaPhone,
  FaThumbsUp,
  FaVoicemail,
} from "react-icons/fa";
import { FaCircle, FaLocationPin, FaPeopleGroup } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#002F70] h-full mr-[26px] ml-12 mt-44 relative items-center mb-4">
      <h2 className="text-white text-3xl font-bold my-16 text-left mr-auto ml-16">
        Core values
      </h2>

      <div className="flex justify-between mt-8 items-center w-full ml-12 px-8">
        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex flex-col justify-start items-start">
            <FaThumbsUp className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" />
          </div>
          <p className="text-white py-2">Committed</p>
          <p className="flex py-2 text-white mt-1">
            At Arc Constructions, we walk the talk. We don't just build; we
            invest. By developing properties ourselves, we pour our heart and
            soul into delivering on time and within budget. It's a personal
            commitment, etched in every brick and beam.
          </p>
        </div>

        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex">
            <FaLightbulb className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" />
          </div>
          <p className="text-white py-2">Inspired</p>
          <p className="flex py-2 text-white mt-1">
            We don't see empty lots, we see possibilities. We're not just
            builders, we're architects of transformation. We breathe new life
            into assets, shape communities, and unlock real value in places
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-20 items-center w-full ml-12 px-8">
        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex flex-col justify-start items-start">
            <FaPeopleGroup className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" />
          </div>
          <p className="text-white py-2">People Centric</p>
          <p className="flex py-2 text-white mt-1">
            We build more than homes; we build the foundation for thriving
            families. It's not just about walls, it's about fostering
            communities where comfort and spirit flourish.
          </p>
        </div>

        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex">
            <FaClock className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" />
          </div>
          <p className="text-white py-2">Efficient</p>
          <p className="flex py-2 text-white mt-1">
            Functionality isn't a burden, it's our artistic signature. We craft
            spaces with visual integrity, maximising every square foot without
            sacrificing aesthetics
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-20 items-center w-full ml-12 px-8 mb-24">
        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex flex-col justify-start items-start">
            <FaCircle className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" />
          </div>
          <p className="text-white py-2">Transparent</p>
          <p className="flex py-2 text-white mt-1">
            Honesty isn't a tagline, it's our way of life. From clear
            communication to open processes, we believe in building trust, brick
            by transparent brick. Client testimonials speak louder than words,
            budgets are demystified, and progress unfolds openly.
          </p>
        </div>
        <div className="flex flex-col h-36 text-white  mr-6 w-1/2">
          <div className="flex flex-col justify-start items-start">
            {/* <FaCircle className="h-10 w-10 mb-2 py-1 px-2 border border-black rounded-full" /> */}
          </div>
          {/* <p className="text-white py-2">Transparent</p>
          <p className="flex py-2 text-white mt-1">
            Honesty isn't a tagline, it's our way of life. From clear
            communication to open processes, we believe in building trust, brick
            by transparent brick. Client testimonials speak louder than words,
            budgets are demystified, and progress unfolds openly.
          </p> */}
        </div>
      </div>

      <div className="flex w-full justify-between items-end rounded-br-xl">
        <div className="flex flex-col bg-white ml-14 mr-auto mb-12 w-1/3 rounded-br-3xl pt-6">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-200 mx-5 mb-5 py-3 pl-3 placeholder:ml-3 focus:border-gray-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 mx-5 mb-5 py-3 pl-3 placeholder:ml-3 focus:border-gray-200"
          />
          <input
            type="number"
            placeholder="Phone"
            className="border border-gray-200 mx-5 mb-5 py-3 pl-3 placeholder:ml-3 focus:border-gray-200"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="border border-gray-200 mx-5 mb-5 h-24 placeholder:m-3 focus:border-gray-200"
          />
          <button
            type="button"
            className="border font-normal border-gray-200 mx-5 my-8 rounded-br-xl bg-[#002F70] text-white h-8 pb-6"
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col w-2/4 mb-12">
          <p className="text-white py-2">Contact us</p>
          <p className="text-white py-2 text-2xl font-bold">
            Let’s get in touch
          </p>
          <p className="text-white py-2 text-wrap mr-2">
            Fill in the form to know more about our services, our team will
            reach out to you soon!
          </p>

          <div className="flex items-center">
            <div className="text-[#002F70] flex bg-white w-fit mr-2 pt-1">
              <div className="flex mr-[2px] bg-[#002F70] p-3">
                <FaPhone className="text-2xl font-bold  text-white" />
              </div>
              <div className="flex flex-col mx-2">
                <p className="text-2xl font-semibold">Calling Support</p>
                <p className="text-sm">(+62)81 235 26512</p>
              </div>
            </div>

            <div className="text-[#002F70] flex bg-white w-fit ml-6 pt-1">
              <div className="flex mr-[2px] bg-[#002F70] p-3 ">
                <FaVoicemail className="text-2xl font-bold  text-white" />
              </div>
              <div className="flex flex-col mx-2">
                <p className="text-2xl font-semibold">Email Information</p>
                <p className="text-sm">support@arcconstruction.com</p>
              </div>
            </div>
          </div>

          <div className="text-[#002F70] flex bg-white w-fit mt-4 pt-1">
            <div className="flex mr-[2px] bg-[#002F70] p-3">
              <FaLocationPin className=" text-2xl font-bold text-white" />
            </div>
            <div className="flex flex-col mx-2">
              <p className="text-2xl font-semibold">Office Location</p>
              <p className="text-sm">Indiranagar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
