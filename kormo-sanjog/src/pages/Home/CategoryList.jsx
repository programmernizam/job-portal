import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import { categoryList } from "../../constant/constant";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  const categories = [...categoryList, ...categoryList];
  return (
    <div className="container pb-[120px] px-2">
      <div>
        <h2 className="text-[40px] leading-[48px] font-bold font-exo mb-5">
          Popular <span className="text-primary">Category</span> List
        </h2>
        <p className="text-[18px] leading-[26px] text-[#595959] font-work">
          To choose your trending job dream & to make future bright.
        </p>
      </div>
      <div className="mt-10">
        <Swiper
          effect={"fade"}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
          loopPreventsSliding={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1500}
          modules={[Autoplay]}
          className="mySwiper scroll-smooth"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
