import ProductTest from "@/components/PRODUCT_TEST"
import ProductCardTEST from "@/components/PRODUCT_TEST/ProductCardTEST"
import PageHeader from "@/components/common/PageHeader"
import Shopsidebar from "@/components/common/Shopsidebar"
import Shoptopbar from "@/components/common/Shoptopbar"
import ProductsBanner from "@/containers/ProductsBanner"
import ProductsGrid from "@/containers/ProductsGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ProductsPage() {
  return (
    <>
      <PageHeader Name="Products" />
      <section className="grid md:grid-cols-[25%_1fr]">
        <div className="max-md:hidden">
          <Shopsidebar />
        </div>
        <div className="flex flex-col">
          <Shoptopbar />
          <ProductsGrid />
          <div className="md:hidden">
            <Shopsidebar />
          </div>
        </div>
      </section>
    </>
  )
}

{
  /* <ProductsBanner />
<ProductsGrid />
<StoreTemplate /> */
}

{
  /* <div className="content flex min-h-screen flex-col-reverse sm:flex-row gap-4">
          <div>
            <Shopsidebar />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Shoptopbar />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <ProductsGrid />
            </div>
          </div>
        </div> */
}
