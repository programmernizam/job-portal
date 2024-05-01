import { FaBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import heroImg from "../../assets/hero-img.png";
import avatar1 from "../../assets/user31.png";
import avatar2 from "../../assets/user32.png";
import avatar3 from "../../assets/user33.png";
import avatar4 from "../../assets/user34.png";
import avatar5 from "../../assets/user35.png";

const demoData = [
  "Engineering,",
  "Marketing,",
  "UI/UX Design,",
  "Data Analyst,",
  "Programming",
];

export default function Hero() {
  return (
    <div className="hero py-[70px] pl-[3%] lg:pl-[8%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="py-[50px] lg:py-0 px-3">
          <h1 className="text-[45px] leading-[50px] text-center lg:text-left lg:text-[70px] lg:leading-[77px] text-[#000] font-bold mb-5">
            To Choose <span className="text-primary">Right Jobs.</span>
          </h1>
          <p className="text-[18px] text-center lg:text-left lg:text-[20px] text-[#797979] mb-[50px]">
            <span className="font-medium">2400</span> Peoples are daily search
            in this portal, <span className="font-medium">100</span> user added
            job portal!
          </p>
          <div>
            {/* Search Filed */}
            <form
              action=""
              className="flex flex-col lg:flex-row items-center justify-between p-[15px] gap-5 bg-white rounded  lg:max-w-[750px] mb-[30px]"
            >
              <div className="flex items-center bg-[#eff3f2] w-full h-[60px] px-[25px] relative form_inner">
                <IoBriefcaseOutline className="mr-5 text-primary text-xl" />
                <input
                  type="text"
                  placeholder="What jobs are you looking for?"
                  className="w-full text-[#000] py-5 bg-transparent text-[15px] leading-4 outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center py-[15px] px-[30px] font-exo font-medium bg-primary text-[17px] leading-[26px] rounded text-white"
              >
                <IoIosSearch />
                Search
              </button>
            </form>
            {/* Tags */}
            <div className="flex flex-col gap-[10px] lg:gap-0 lg:flex-row items-center mb-[65px]">
              <p className="flex items-center mr-[3px]">
                <FaBookmark className="text-primary text-sm" />
                <span className="font-semibold text-[#000] text-[16px] leading-[19px] mr-[15px]">
                  Suggested Tag:
                </span>
              </p>
              <p className="text-center lg:text-left">
                {demoData.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[14px] leading-[14px] text-[#797979] hover:text-primary cursor-pointer"
                  >
                    {tag}{" "}
                  </span>
                ))}
              </p>
            </div>
            {/* Users */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex items-center mb-5 lg:mr-5">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="h-12 w-12 p-1 bg-white rounded-full shadow"
                />
                <img
                  src={avatar2}
                  alt="avatar"
                  className="h-12 w-12 p-1 bg-white rounded-full -ml-4 shadow"
                />
                <img
                  src={avatar3}
                  alt="avatar"
                  className="h-12 w-12 p-1 bg-white rounded-full -ml-4 shadow"
                />
                <img
                  src={avatar4}
                  alt="avatar"
                  className="h-12 w-12 p-1 bg-white rounded-full -ml-4 shadow"
                />
                <img
                  src={avatar5}
                  alt="avatar"
                  className="h-12 w-12 p-1 bg-white rounded-full -ml-4 shadow"
                />
                <p className="w-12 h-12 bg-white rounded-full -ml-4 flex flex-col items-center justify-center shadow">
                  <span className="text-[16px] leading-4 font-bold text-primary">
                    21k
                  </span>
                  <span className="text-[11px] leading-4 text-[#595959]">
                    Users
                  </span>
                </p>
              </div>
              <p className="text-[16px] font-medium">
                To Much People Have Connected With Us!
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero_img" />
        </div>
      </div>
    </div>
  );
}
