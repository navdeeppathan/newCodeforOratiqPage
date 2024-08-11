import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import {
  iconQuote,
  person,
  personImg,
  personImg2,
} from "../../../assets/AllImages";
import TestinomialsReadBtn from "./TestinomialsReadBtn";

const QuoteSection = () => {
  const quotes = [
    {
      id: 1,
      text: "This is one of the best mouth washes I have ever came across for my sensitive teeth. I loved the fact that It's totally made with some amazing herbal ingredients and is alcohol free. Now it’s part of my oral hygiene routine. Refreshing mouth wash that prevent bad breathe odour as well. Refreshing mouth wash that prevent bad breathe odour as well. Refreshing mouth wash that prevent bad breathe odour as well. Refreshing mouth wash that prevent bad breathe odour as well. Refreshing mouth wash that prevent bad breathe odour as well",
      // authImg: personIcon,
      authorName: "Aishwarya Patil",
      authorPassion: "Pune",
    },
    {
      id: 2,
      text: "Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using Tea tree & Charcoal tooth paste.",
      // authImg: personIcon,
      authorName: "Rahul Pandey",
      authorPassion: "Ranchi",
    },
    {
      id: 3,
      text: "Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using Tea tree & Charcoal tooth paste.",
      // authImg: personIcon,
      authorName: "Aishwarya Patil",
      authorPassion: "Pune",
    },
    {
      id: 3,
      text: "Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using Tea tree & Charcoal tooth paste.",
      // authImg: personIcon,
      authorName: "Aishwarya Patil",
      authorPassion: "Pune",
    },
    {
      id: 3,
      text: "Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using Tea tree & Charcoal tooth paste.",
      // authImg: personIcon,
      authorName: "Aishwarya Patil",
      authorPassion: "Pune",
    },
  ];

  return (
    <div className="py-16 bg-[#E9F8EF]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="md:text-5xl text-4xl font-sans font-bold text-center text-[#172B4D]">
          Testimonials
        </h1>
        <h3 className="md:text-base text-sm font-sans font-normal text-center text-[#172B4D]">
          Hear what our customers say
        </h3>
      </div>
      <div className="py-16 ">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={5000}
          style={{
            "--swiper-pagination-color": "#405741",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-width": "24px",
            "--swiper-pagination-bullet-height": "8px",
            "--swiper-pagination-bullet-border-radius": "40px",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            357: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          spaceBetween={90}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 0,
            slideShadows: false,
          }}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <TestinomialsReadBtn
                quote={quote.text}
                authImg={personImg}
                authorName={quote.authorName}
                authorPassion={quote.authorPassion}
                icon={iconQuote}
              />
            </SwiperSlide>
          ))}
          <div className="h-20"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4">
            <div className="custom-swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default QuoteSection;
