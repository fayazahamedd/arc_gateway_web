import { FaArrowRight, FaBusinessTime, FaIndustry } from "react-icons/fa";
import Button from "../components/button";
import { FaArrowLeft, FaHouse, FaLandMineOn } from "react-icons/fa6";
import { useState } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373121/house_1_denq6e.jpg",
    alt: "house 1",
    title: "Myntra Warehouse on Soukya Road (2015)",
    space: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373117/house_7_pvbvex.jpg",
    alt: "house 7",
    title: "#6 Primrose, Next to MG Road (2014)",
    space: "Leasable Area: 3000 Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373117/house_6_cl76eh.jpg",
    alt: "house 6",
    title: "Warehouse Complex, Whitefield (2017)",
    space: "Leasable Area: 1 Lac Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373115/house_10_v8jnzo.jpg",
    alt: "house 10",
    title: "Corporate Office, Outer Ring Road (2018)",
    space: "Leasable Area: 50,000 Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373113/house_2_b3lafd.jpg",
    alt: "house 2",
    title: "Tech Park, Marathahalli (2019)",
    space: "Leasable Area: 3 Lac Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373113/house_8_yamm1u.jpg",
    alt: "house 8",
    title: "Retail Store, Jayanagar (2020)",
    space: "Leasable Area: 10,000 Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373113/house_9_bgwon4.jpg",
    alt: "house 9",
    title: "Luxury Villas, Whitefield (2021)",
    space: "Leasable Area: 5,000 Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373111/house_5_bzfvx8.jpg",
    alt: "house 5",
    title: "Industrial Shed, Peenya (2016)",
    space: "Leasable Area: 1.5 Lac Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373111/house_4_ppbulw.jpg",
    alt: "house 4",
    title: "IT Hub, Electronic City (2013)",
    space: "Leasable Area: 2.5 Lac Sq. Ft",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725373111/house_3_agykog.jpg",
    alt: "house 3",
    title: "Commercial Space, Koramangala (2022)",
    space: "Leasable Area: 15,000 Sq. Ft",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalItems = images.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const start = currentIndex * itemsPerPage;
  const currentItems = images.slice(start, start + itemsPerPage);

  return (
    <div className="relative h-[100vh] flex bg-[#F8F8F8] my-36">
      <div className="flex flex-col mx-12 justify-center w-full">
        <div className="flex flex-col">
          <div className="flex">
            <p className="flex text-3xl font-extrabold text-[#878B8D] mt-8 pb-2">
              Completed{" "}
            </p>
            <p className="flex text-3xl font-extrabold text-[#002F70] mt-8 pb-2 ml-2">
              Projects
            </p>
          </div>
          <p className="w-[80%] mt-4">
            At Arc Constructions, we take pride in our diverse portfolio of
            successfully completed projects. Each venture showcases our
            commitment to quality, innovation, and client satisfaction. Explore
            our past projects to witness the excellence we bring to every
            development.
          </p>
          <div className="flex">
            {currentItems.map((item) => (
              <div className="w-96 mt-8 mr-3" key={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-56 w-96 object-cover object-center rounded-br-2xl ease-in-out transition-shadow"
                />
                <div className="flex text-sm mt-2">
                  <p className="flex ">{item.title}</p>
                  <p className="flex ml-auto mr-1">{item.space}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="relative flex border w-48 border-[#002F70] border-opacity-20 my-2 rounded-br-lg">
              <Button label={"View All property"} />
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="flex">
                <FaArrowLeft
                  className={`border border-black rounded-full text-sm p-[2px] cursor-pointer ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrev}
                />
              </div>
              <p className="font-extrabold text-[#002F70] mt-2 mx-2 pb-2">
                {currentIndex + 1} / {totalPages}
              </p>
              <div className="flex">
                <FaArrowRight
                  className={`border border-black rounded-full text-sm p-[2px] cursor-pointer ${
                    currentIndex === totalPages - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F8F8F8] mt-16">
          <div className="">
            <p className="text-3xl font-extrabold text-[#002F70] mt-8 pb-2 w-1/2">
              Our Services
            </p>
            <p className="w-[80%]">
              Arc Constructions offers a helping hand to businesses and
              individuals alike, turning visions into thriving spaces.
            </p>

            <div className="flex mb-4 mt-8">
              <p className="flex py-2 bg-[#333333] text-white rounded-full text-sm font-light px-8">
                Residential
              </p>
              <p className="flex py-2 bg-white text-black rounded-full text-sm font-light px-8 border border-[#333333] ml-4">
                Construction
              </p>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center mt-4 w-64 h-36 border  border-gray-400 rounded-br-2xl mb-4 bg-white mr-6">
                <div className="flex">
                  <FaLandMineOn className="h-10 w-10 text-[#002F70]" />
                </div>
                <p className="flex py-2 text-[#002F70] text-xl font-bold mt-4">
                  Commercial
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-4 w-64 h-36 border  border-gray-400 rounded-br-2xl mb-4 bg-white mr-6">
                <div className="flex">
                  <FaIndustry className="h-10 w-10 text-[#002F70]" />
                </div>
                <p className="flex py-2 text-[#002F70] text-xl font-bold mt-4">
                  Industrial Parks
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-4 w-64 h-36 border  border-gray-400 rounded-br-2xl mb-4 bg-white mr-6">
                <div className="flex">
                  <FaBusinessTime className="h-10 w-10 text-[#002F70]" />
                </div>
                <p className="flex py-2 text-[#002F70] text-xl font-bold mt-4">
                  Business Parks
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-4 w-64 h-36 border  border-gray-400 rounded-br-2xl mb-4 bg-white mr-6">
                <div className="flex">
                  <FaHouse className="h-10 w-10 text-[#002F70]" />
                </div>
                <p className="flex py-2 text-[#002F70] text-xl font-bold mt-4">
                  Business Parks
                </p>
              </div>
            </div>

            <div className="relative flex border w-32 border-[#002F70] border-opacity-20 my-2 rounded-br-lg mb-40">
              <Button label={"Know More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
