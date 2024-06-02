import ProductTest from "@/components/PRODUCT_TEST"
import ProductCaller from "@/components/PRODUCT_TEST/ProductCallerTEST"
import Scrollbutton from "@/components/common/Scrollbutton"
import SectionTitle from "@/components/common/SectionTitle"
import DividerSection from "@/containers/Divider"
import HomeBanner from "@/containers/HomeBanner"
import HomeProducts from "@/containers/HomeProducts"
import OfferSection from "@/containers/OfferSection"
import PartnerSection from "@/containers/PartnerSection"
import QuotesCarousel from "@/containers/QuotesCarousel"
import SubscribeSection from "@/containers/SocialMediaSection"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import TopSelling from "@/containers/TopSelling"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fusta",
  description: "An ecommerce platform for furniture",
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <TopSelling />
      {/* <ProductCaller /> */}
      <DividerSection />
      <HomeProducts
        slice={4}
        subtitle="Our latest releases"
        title="New Arrivals"
      />
      <OfferSection />
      <HomeProducts
        slice={8}
        subtitle="Our highest Selling Products"
        title="Top Products"
      />
      <QuotesCarousel />
      <SubscribeSection />
      <PartnerSection />
      <Scrollbutton />
    </>
  )
}
