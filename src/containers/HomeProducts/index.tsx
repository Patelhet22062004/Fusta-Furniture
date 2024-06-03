"use client"
import { topProduct } from "@/lib/constData"
import Button from "@/components/common/Button"
import ProductCard from "@/components/products/ProductCard"
import { notFound } from "next/navigation"
import { medusaClient } from "@/lib/config"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"
import SectionTitle from "@/components/common/SectionTitle"

type Props = {
  title: string
  subtitle: string
  slice: number
}

const HomeProducts = ({ slice, title, subtitle }: Props) => {
  // const { products } = await medusaClient.products.list().catch((err) => {
  //   notFound()
  // })

  const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products } = useProducts({
    limit: slice,
    sales_channel_id: [sales_channel],
  })

  return (
    <>
      <section>
        <SectionTitle title={title} subtitle={subtitle} />

        <div
          id="top-products"
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-4"
        >
          {products && !products.length && <span>No Products</span>}
          {products && products.length > 0 && (
            <>
              {products?.slice(0, slice).map((product) => (
                <ProductProvider key={product.id} product={product}>
                  <ProductCard key={product.id} product={product} />
                </ProductProvider>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default HomeProducts

{
  /* <section
      id="top-products"
      className="grid lg:grid-cols-[25%_1fr] grid-cols-1 items-center gap-2"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-heading4">{topProduct.heading}</h3>
        <p className="text-caption2 text-gray mb-2">{topProduct.description}</p>
        <Button
          variant="fill"
          color="black"
          className="w-max !rounded-full"
          as="a"
          href="/products"
        >
          {topProduct.actionBtn}
        </Button>
      </div>
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {products?.slice(0, 3).map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard key={product.id} product={product} />
            </ProductProvider>
          ))}
        </div>
      )}
    </section> */
}
