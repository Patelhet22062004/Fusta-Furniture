import PageHeader from "@/components/common/PageHeader"
import AboutUsBanner from "@/containers/AboutUsBanner"
import CountSection from "@/containers/Countsection"
import PartnerSection from "@/containers/PartnerSection"
import QuotesCarousel from "@/containers/QuotesCarousel"
import SubscribeSection from "@/containers/SocialMediaSection"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import TopSelling from "@/containers/TopSelling"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea Ypu",
}

const page = () => {
  return (
    <>
      <PageHeader Name="About" />
      <TopSelling />
      <CountSection />
      <QuotesCarousel />
      <SubscribeSection />
      <PartnerSection />
    </>
  )
}

export default page

{
  /* <AboutUsBanner />
      <WhyChooseUs />
      <TestimonialCarousel /> */
}
