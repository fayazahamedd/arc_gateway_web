import Button from "../components/button";

const data = [
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725370501/3d_sketch_t9hgmr.jpg",
    alt: "3d_sketch",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725370504/truck_evacuate_vu4axh.jpg",
    alt: "truck",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725370505/house_sketch_hq490b.jpg",
    alt: "house_sketch",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1725370505/modal_sketch_wt61do.jpg",
    alt: "modal_sketch",
  },
];

const About = () => {
  return (
    <div className="relative bg-white h-[100vh] flex mb-28">
      <div className="flex mx-12 justify-center items-center">
        <div className="flex flex-col w-[60%]">
          <p className="text-xl font-semibold text-[#002F70]">About us</p>
          <p className="text-3xl font-extrabold text-[#002F70] mt-8 pb-2">
            Building dreams,
          </p>

          <p className="text-3xl font-extrabold text-[#002F70] pb-2">
            brick by brick, since the 1060s.
          </p>
          <p className="text-sm text-black mt-4">
            Since the 1960s, we've been building in Bengaluru, starting with
            handmade bricks and tiles. Today, we construct everything from cosy
            homes to busy business centres using steel and glass. We're a
            dedicated and family-oriented team, using the latest tools while
            staying true to our roots.
          </p>
          <div className="relative flex border w-32 border-[#002F70] border-opacity-20 my-2 rounded-br-lg mt-10">
            <Button label={"Know more"} />
          </div>
        </div>

        <div className="flex items-center justify-center h-full w-[40%]">
          {data.map((item, index) => (
            <div className={`mx-2 ${index %2 ===1 && "mt-20"}`} key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                className="h-80 w-24 object-cover object-center rounded-full border"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
