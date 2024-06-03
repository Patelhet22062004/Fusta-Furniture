"use client"
import { quotesData } from "@/lib/constData"
import styles from "./quotesCarousel.module.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import QuotesCard from "@/components/QuotesCard"

type Props = {}

const QuotesCarousel = (props: Props) => {
  return (
    <div
      className="Breadcrumb brightness-75 text-center py-4 md:py-10 bg-no-repeat bg-scroll bg-center bg-cover bg-white"
      style={{ backgroundImage: "url(/images/QuotesImage.jpg)" }}
    >
      <section>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="relative"
          >
            {quotesData.testimonialCards.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <QuotesCard data={item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default QuotesCarousel

{
  /* <div className="py-8">
<div className="relative items-center justify-center">
  <section>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="relative"
    >
      {quotesData.testimonialCards.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <QuotesCard data={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  </section>
  <div className="absolute -z-10 brightness-50 w-full top-0">
    <Image
      alt="image not found"
      src={QuotesImage}
      className="object-contain"
    />
  </div>
</div>
</div> */
}
