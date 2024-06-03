"use client"
import React from "react"
import Image from "next/image"
import Styles from "./banner.module.css"
import Button from "../Button"
import { BannerPropsType, BannerPropsType2 } from "@/utils/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"
import "./animation.component.css"

const Banner = ({ banners }: BannerPropsType2) => {
  return (
    <div className="bg-slate-100">
      <section>
        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="relative"
          >
            {banners?.map((banner, index) => {
              return (
                <SwiperSlide>
                  <div className={Styles.gridSection}>
                    <div className={`${Styles.contentWrapper} lineUp2`}>
                      <div className={Styles.content}>
                        <h2 className={Styles.heading}>{banner.heading}</h2>
                        {banner.description && (
                          <p className={Styles.description}>
                            &quot;{banner.description}&quot;
                          </p>
                        )}
                      </div>
                      <div className={Styles.bannerButtons}>
                        {banner.actionBtn1 && (
                          <Button
                            variant="fill"
                            color="green"
                            as="a"
                            href={"http://localhost:8000/products"}
                            className="!rounded-full"
                          >
                            {banner.actionBtn1}
                          </Button>
                        )}
                        {banner.actionBtn2 && (
                          <Button
                            variant="outlined"
                            color="dark"
                            as="a"
                            href={"/products"}
                            className="!rounded-full"
                          >
                            {banner.actionBtn2}
                          </Button>
                        )}
                      </div>
                    </div>
                    {banner.backgroundBannerImage && (
                      <div className={`${Styles.backgroundBannerImage} line1`}>
                        <Image
                          src={banner.backgroundBannerImage}
                          alt={"Banner Image"}
                          fill
                          style={{ objectFit: "contain" }}
                          className="lineUp1"
                          id="lineText"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button
            type="button"
            className="z-30 prev-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)]"
          >
            <span className="sr-only">home banner previous button</span>
            <PrevIcon className={Styles.btnIcon} />
          </button>
          <button
            type="button"
            className="z-30 next-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] right-0"
          >
            <span className="sr-only">home banner next button</span>
            <NextIcon className={Styles.btnIcon} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Banner

{
  /* <section className={Styles.gridSection}>
      <div className={Styles.contentWrapper}>
        <div className={Styles.content}>
          <h2 className={Styles.heading}>{data.heading}</h2>
          {data.description && (
            <p className={Styles.description}>&quot;{data.description}&quot;</p>
          )}
        </div>
        <div className={Styles.bannerButtons}>
          {data.actionBtn1 && (
            <Button
              variant="fill"
              color="yellow"
              as="a"
              href={"#top-products"}
              className="!rounded-full"
            >
              {data.actionBtn1}
            </Button>
          )}
          {data.actionBtn2 && (
            <Button
              variant="outlined"
              color="light"
              as="a"
              href={"/products"}
              className="!rounded-full"
            >
              {data.actionBtn2}
            </Button>
          )}
        </div>
      </div>
      {data.backgroundBannerImage && (
        <div className={Styles.backgroundBannerImage}>
          <Image
            src={data.backgroundBannerImage}
            alt={"Banner Image"}
            fill
            style={{ objectFit: "contain" }}
            className="z-10"
          />
        </div>
      )}
    </section> */
}
