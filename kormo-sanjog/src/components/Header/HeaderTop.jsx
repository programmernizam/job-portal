import { socialIcons } from "../../constant/constant";

export default function HeaderTop() {
  return (
    <div className="hidden lg:flex justify-between items-center bg-slate-200 dark:bg-darkMode py-3 px-[7%]">
      <div>
        <p className="font-worksans">
          Welcome Our Job Portal!{" "}
          <span className="font-semibold text-primary">Save Jobs</span>
        </p>
      </div>
      <div className="flex items-center gap-[15px]">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="bg-none border border-primary h-[30px] w-[30px] flex justify-center items-center rounded-full group hover:bg-primary transition duration-300"
          >
            <span
              className="text-[16px] text-primary
            group-hover:text-white font-[16px]"
            >
              <item.icon />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
