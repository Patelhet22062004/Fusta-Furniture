import CartSummary from "@/components/CartSummary"
import PageHeader from "@/components/common/PageHeader"
import CartGrid from "@/containers/CartGrid"
import OfferandTotalSection from "@/containers/OfferandTotalSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default function Cart() {
  return (
    <>
      <PageHeader Name="Your Cart" />
      <section>
        <CartGrid />
        <OfferandTotalSection />
      </section>
    </>
  )
}

{
  /* <Banner data={cartPageBanner} />
      <section className="grid grid-cols-1 md:grid-cols-[1fr_40%] justify-center gap-14">
        <CartItemList />
        <div className="flex flex-col gap-14 h-max sticky top-[100px]">
          <CartSummary />
        </div>
      </section> */
}
