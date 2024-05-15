/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  const { img, title, icon, popular, trending, jobs } = category;
  return (
    <div
      className={"bg-cover bg-center bg-no-repeat px-[18px] py-[30px] relative"}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="z-10 relative">
        <img
          src={icon}
          alt={title}
          className="text-primary"
          style={{ fill: "#00a7ac" }}
        />
        <h3 className="text-white">{title}</h3>
      </div>
    </div>
  );
}
