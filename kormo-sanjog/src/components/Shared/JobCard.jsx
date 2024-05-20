/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import CommonButton from "./CommonButton";

export default function JobCard({ job }) {
  const {
    title,
    company,
    logo,
    salary,
    deadline,
    type,
    perMonth,
    perHour,
    perYear,
    experience,
    location,
  } = job;
  return (
    <div className="border py-[40px] px-[75px] rounded-xl">
      {/* Card Top */}
      <div className="flex justify-between gap-5 mb-[30px]">
        <div className="flex flex-row gap-20 relative">
          <div className="flex gap-3 relative">
            <img
              src={logo}
              alt="title"
              className="rounded-full w-[52px] h-[52px]"
            />
            <div className="job_details">
              <h3 className="font-semibold text-[20px] leading-[24px] text-black hover:text-primary cursor-pointer">
                {title}
              </h3>
              <p className="text-[15px] leading-[26px] text-black hover:text-primary cursor-pointer">
                {company}
              </p>
            </div>
          </div>
          {/* Job Details */}
          <div className="flex gap-10 job_detail">
            <ul>
              <li>
                <span className="font-normal text-[#595959] font-exo text-[16px]">
                  Location:
                </span>{" "}
                <span className="text-[16px] font-medium text-black">
                  {location}
                </span>
              </li>
              <li>
                <span className="font-normal text-[#595959] font-exo text-[16px]">
                  Salary:
                </span>{" "}
                <span className="text-[16px] font-medium text-black">
                  {salary}
                </span>
                {perMonth && (
                  <span className="text-[15px] text-[#595959] font-medium">
                    {" "}
                    / PerMonth
                  </span>
                )}
                {perHour && (
                  <span className="text-[15px] text-[#595959] font-medium">
                    {" "}
                    / PerHour
                  </span>
                )}
                {perYear && (
                  <span className="text-[15px] text-[#595959] font-medium">
                    {" "}
                    / PerYear
                  </span>
                )}
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-normal text-[#595959] font-exo text-[16px]">
                  Experience:
                </span>{" "}
                <span className="text-[16px] font-medium text-black">
                  {experience}
                </span>
              </li>
              <li>
                <span className="font-normal text-[#595959] font-exo text-[16px]">
                  Deadline:
                </span>
                <span className="text-[16px] font-medium text-black">
                  {deadline}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="p-2 bg-primary/10 rounded-full group hover:bg-primary transition duration-500 cursor-pointer">
            <FaBookmark className="text-primary group-hover:text-white" />
          </div>
        </div>
      </div>
      {/* Card Bottom */}
      <div className="flex justify-between items-center gap-20">
        <div>
          <div className="flex items-center gap-1">
            <IoBriefcaseOutline />
            <p>
              Job Applied: <span>07 Person</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          {type.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>
          <CommonButton />
        </div>
      </div>
    </div>
  );
}
