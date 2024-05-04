import { Swiper, SwiperSlide } from "swiper/react";
import partner1 from "../../assets/partners/trusted-company-01.png";
import partner2 from "../../assets/partners/trusted-company-02.png";
import partner3 from "../../assets/partners/trusted-company-03.png";
import partner4 from "../../assets/partners/trusted-company-04.png";
import partner5 from "../../assets/partners/trusted-company-05.png";
import partner6 from "../../assets/partners/trusted-company-06.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay } from "swiper/modules";
export default function Partner() {
  const slides = [
    { src: partner1, alt: "partners" },
    { src: partner2, alt: "partners" },
    { src: partner3, alt: "partners" },
    { src: partner4, alt: "partners" },
    { src: partner5, alt: "partners" },
    { src: partner6, alt: "partners" },
  ];

  // Duplicate slides to ensure enough slides for loop mode
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className="container px-2 py-[120px]">
      <div className="mb-4">
        <h2 className="partner_title relative inline-block text-[18px] leading-[22px] font-medium font-exo">
          Our Trusted Company
        </h2>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        loop={true}
        loopPreventsSliding={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper scroll-smooth"
      >
        {duplicatedSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
