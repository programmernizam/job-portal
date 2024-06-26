import CommonButton from "../../components/Shared/CommonButton";
import JobCard from "../../components/Shared/JobCard";
import { jobsList } from "../../constant/constant";

export default function FeaturedJobs() {
  return (
    <section className="py-[90px] bg-[#F8F8F8]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end">
          <div>
            <h2 className="text-[40px] leading-[48px] font-bold mb-5">
              <span className="text-primary">Featured</span> Job List
            </h2>
            <p className="text-[18px] leading-[26px] text-[#595959]">
              To choose your trending job dream & to make future bright.
            </p>
          </div>
          <div>
            <CommonButton />
          </div>
        </div>
        {/* Featured Jobs Loop */}
        <div className="grid grid-cols-1 gap-8 mt-10">
          {jobsList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
