/* eslint-disable react/prop-types */
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
  } = job;
  return (
    <div className="border py-[30px] px-[25px] rounded">
      <div className="flex gap-5">
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
          <div>
            <ul>
              <li>
                Salary: <span>{salary}</span>
                {perMonth && <span>/PerMonth</span>}
                {perHour && <span>/PerHour</span>}
                {perYear && <span>/PerYear</span>}
              </li>
              <li>
                Deadline: <span>{deadline}</span>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
