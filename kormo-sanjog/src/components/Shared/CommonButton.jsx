import { BsArrowRight } from "react-icons/bs";

export default function CommonButton() {
  return (
    <a
      href="#"
      className="flex items-center justify-end gap-[3px] text-[17px] leading-[17px] font-medium transition duration-300 hover:text-primary font-exo"
    >
      Explore More
      <span className="ml-1">
        <BsArrowRight />
      </span>
    </a>
  );
}
