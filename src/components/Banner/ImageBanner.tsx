import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import image from "@/assests/myImage.jpg"
import { FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import Image from "next/image";

const ImageBanner = () => {
  const iconStyle =
    "block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1";

  return (
    <div>
      <div className="relative h-full w-full flex items-center justify-center ">
        <div className=" relative  p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          <div className="">
            <button className="profile_item profile-card-container  left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-cyan-400">
                <FaReact className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className=" text-cyan-400">
                <SiTailwindcss className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-green-600">
                <SiMongodb className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-slate-400">
                <SiExpress className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-black">
                <FaGithub className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-orange-600">
                <FaHtml5 className={`${iconStyle}`} />
              </span>
            </button>

            <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="text-yellow-500">
                <SiJavascript className={`${iconStyle}`} />
              </span>
            </button>
          </div>

          <div>
            <button className="profile_item w-[200px]  h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <Image
                className="h-full w-full flex items-center justify-center  rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500"
                src={image}
                alt="profile image"
               
                
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
