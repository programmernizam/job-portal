/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa";

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
      <div className="flex justify-between gap-5">
        <div className="flex flex-row gap-20 relative">
          <div className="flex gap-3">
            <img
              src={logo}
              alt="title"
              className="rounded-full w-[52px] h-[52px]"
            />
            <div className="job_details">
              <h3>{title}</h3>
              <p>{company}</p>
            </div>
          </div>
          <div className="flex gap-10">
            <ul>
              <li>
                Location: <span>{location}</span>
              </li>
              <li>
                Salary: <span>{salary}</span>
                {perMonth && <span> / PerMonth</span>}
                {perHour && <span> / PerHour</span>}
                {perYear && <span> / PerYear</span>}
              </li>
            </ul>
            <ul>
              <li>
                Salary: <span>{experience}</span>
              </li>
              <li>
                Deadline: <span>{deadline}</span>
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
    </div>
  );
}
