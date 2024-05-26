import Navbar from "./components/Navbar";
import { PiLeafFill } from "react-icons/pi";
import { IoMapOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { BiBuildings } from "react-icons/bi";
import { LiaWaterSolid } from "react-icons/lia";
import { PiTaxiLight } from "react-icons/pi";
import { GiWoodFrame } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

function App() {
  return (
    <>
      <div className=" min-h-screen mx-3 hero">
        <Navbar />
        <div className=" flex flex-wrap md:justify-evenly">
          <div className="md:w-[50%] w-full md:relative">
            <div className=" md:absolute md:left-20 md:top-20 mx-2">
              <h5 className="para1 uppercase text-lg  text-orange-600 font-semibold">
                best destinations around the world
              </h5>
              <h1 className="md:text-7xl text-6xl font-semibold text-[#181E4B] heading">
                Travel,
                <span className=" border-b-2 border-orange-500">enjoy</span>
                <br /> and live a new <br /> and full fill
              </h1>
              <div className=" md:w-96 my-5">
                <p className="lg:text-[16px] text-lg para2">
                  Built Wicket longer admire do barton vanity do in it.preferred
                  to sportsmen it engressed listeninng. Park gate sell they west
                  dard for it.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <button className=" bg-yellow-400 px-4 py-2 rounded-md text-white text-lg">
                  Find out more
                </button>
                <div className="flex items-center gap-3">
                  <div class="relative w-12 h-12 bg-[#e9726a] rounded-full flex items-center justify-center">
                    <div class="play-button"></div>
                  </div>
                  <h1 className="text-lg">Play demo</h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-[50%] w-full relative">
            <img
              src="/images/header.png"
              alt=""
              className=" md:w-[500px] md:h-[500px]"
            />
            <img
              src="/images/plan.png"
              alt=""
              className=" absolute md:top-16 top-10 left-20 md:left-24  w-20"
            />
            <img
              src="/images/plan.png"
              alt=""
              className=" absolute md:top-28 top-20 right-0 md:right-40  w-20"
            />
          </div>
        </div>
      </div>
      <div className=" min-h-screen w-full flex justify-evenly  flex-wrap mx-3">
        <div className=" md:w-[50%] w-full md:relative">
          <div className=" md:absolute left-20">
            <h1 className=" text-gray-400 font-semibold text-lg">
              Easy and fast
            </h1>
            <h1 className=" text-[#14183E] md:text-5xl text-4xl font-semibold">
              Book your next trip
              <br /> in 3 easy steps
            </h1>
            <div className="  py-3">
              <div className=" my-3 flex gap-4 items-start w-96">
                <div
                  className={` w-14 h-10 bg-[#F0BB1F] rounded-lg flex justify-center items-center`}
                >
                  <GiWoodFrame />
                </div>
                <div>
                  <h1 className="text-[#5E6282] font-semibold text-base">
                    Choose Destination
                  </h1>
                  <p className="text-[#5E6282] text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, a.
                  </p>
                </div>
              </div>
              <div className=" my-3 flex gap-4 items-start w-96">
                <div
                  className={` w-14 h-10 bg-[#F15A2B] rounded-lg flex justify-center items-center`}
                >
                  <LiaWaterSolid />
                </div>
                <div>
                  <h1 className="text-[#5E6282] font-semibold text-base">
                    Make Payment
                  </h1>
                  <p className="text-[#5E6282] text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, a.
                  </p>
                </div>
              </div>
              <div className=" my-3 flex gap-4 items-start w-96">
                <div
                  className={` w-14 h-10 bg-[#006380] rounded-lg flex justify-center items-center`}
                >
                  <PiTaxiLight />
                </div>
                <div>
                  <h1 className="text-[#5E6282] font-semibold text-base">
                    Reach Airport on Selected Date
                  </h1>
                  <p className="text-[#5E6282] text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[50%] w-full relative">
          <div className=" absolute w-60 rounded-lg h-72 bg-[#FFFFFF] shadow-xl mt-20 z-50">
            <div className=" p-4">
              <img src="/images/card.jpg" alt="" className=" rounded-lg" />
            </div>
            <div className="px-4">
              <h1 className=" text-[#080809] py-1 text-lg">Trip To Greece</h1>
              <p className="text-[14px] text-[#84829A] font-semibold ">
                14-29 June | by Robbin joseph
              </p>
              <div className=" py-2 flex gap-3">
                <div className=" w-7 h-7 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                  <PiLeafFill color="#84829A" />
                </div>
                <div className=" w-7 h-7 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                  <IoMapOutline color="#84829A" />
                </div>
                <div className=" w-7 h-7 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                  <IoIosSend color="#84829A" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 py-2">
                  <BiBuildings color="#84829A" />
                  <p className="text-[12px]">24 people going</p>
                </div>
                <div>
                  <CiHeart color="#4152CA" />
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute top-24 left-72 md:right-[370px] z-0 ">
            <div className=" absolute top-1 right-5 w-20 h-12 border rounded-full border-[#84829A] rotate-150"></div>
            <div className=" absolute top-4 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-120"></div>
            <div className=" absolute top-6 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-60"></div>
            <div className=" absolute top-8 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-12"></div>
            <div className=" absolute top-10 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-12"></div>
            <div className=" absolute top-12 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-45"></div>
            <div className=" absolute top-16 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-45"></div>
            <div className=" absolute top-20 right-2 w-20 h-12 border rounded-full border-[#84829A] rotate-45"></div>
          </div>
          <div className=" w-44 z-50 h-20  rounded-e-lg bg-[#FFFFFF] shadow-xl absolute top-[230px]  left-44 flex">
            <div className=" w-10 h-10 m-2">
              <img src="/images/mosq.png" alt="" className=" rounded-full" />
            </div>
            <div className="pt-2">
              <h1 className=" text-[12px]">Ongoing</h1>
              <h1 className="text-[14px]">Trip to rome</h1>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-[#8A79DF]">40%</span>
                <h3 className="text-[12px] font-semibold">completed</h3>
              </div>
              <div className="border-b-2 border-[#8A79DF] w-12"></div>
            </div>
          </div>

          <div className=" w-36 h-36  flex-col justify-between absolute md:right-48 md:top-0 top-[-100px] right-10">
            <div className="flex justify-between text-xl text-[#E5E5E5]">
              <span className="text-[#FF7152]">+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <div className="flex justify-between text-xl text-[#E5E5E5]">
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <div className="flex justify-between text-xl text-[#E5E5E5]">
              <span>+</span>
              <span>+</span>
              <span className="text-[#6246E5]">+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <div className="flex justify-between text-xl text-[#E5E5E5]">
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <div className="flex justify-between text-xl text-[#E5E5E5]">
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
