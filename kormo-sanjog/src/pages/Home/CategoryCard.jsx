/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  const { img, title, icon, popular, trending, jobs } = category;
  return (
    <div
      className={
        "bg-cover bg-center bg-no-repeat px-[18px] py-[30px] relative w-full h-[190px] object-cover rounded-[5px] flex items-center"
      }
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0 rounded-[5px]"></div>
      <div className="absolute top-5 right-5 z-10">
        {popular && (
          <p className="bg-[#99daa8] rounded-full py-[2px] px-[15px] text-[12px] font-medium inline-block">
            Popular
          </p>
        )}
        {trending && (
          <p className="bg-[#99daa8] rounded-full py-[2px] px-[15px] text-[12px] font-medium inline-block">
            Trending
          </p>
        )}
      </div>
      <div className="z-10 relative">
        <img src={icon} alt="" />
        <h3 className="text-white text-[20px] leading-[24px] font-semibold mt-5 mb-2">
          {title}
        </h3>
        <p className="text-white text-[18px] leading-[26px]">
          Open Post: <span className="font-semibold">{jobs}</span>
        </p>
      </div>
    </div>
  );
}
