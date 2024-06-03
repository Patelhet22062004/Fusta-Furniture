"use client"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const ProductsGrid = () => {
  const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  console.log("products", sales_channel, "hello")
  const { products } = useProducts({
    sales_channel_id: [sales_channel],
  })

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard product={product} />
            </ProductProvider>
          ))}
        </>
      )}
    </section>
  )
}

export default ProductsGrid
