"use client"
import Image from "next/image"
import Styles from "./productCard.module.css"
import AddToCartBtn from "../AddToCartBtn"
import ShareBtn from "@/public/icons/send.svg"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Button from "@/components/common/Button"

function Copy() {
  var Url = document.getElementById("url")
  Url.innerHTML = window.location.href
  console.log(Url.innerHTML)
  Url.select()
  document.execCommand("copy")
}

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductCard = ({ product }: ProductTemplateProps) => {
  return (
    <div className={Styles.main}>
      <span className="sr-only">Product Card</span>
      <div className={Styles.productWrapper}>
        <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={Styles.productImage}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
            />
          )}
          <div className={Styles.infoWrapper}>
            <span>Sale</span>
            <span>78%</span>
          </div>
        </Link>
        <div className={Styles.content}>
          <p className={Styles.productName}>{product?.title}</p>
          <Price id={product.id as string} />
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <div>
          <AddToCartBtn type="icon" product={product} />
        </div>
        {/* <div>
          <Button
            id="url"
            variant="round"
            color="green"
            // className=" bg-white hover:bg-green hover:text-white"
          >
            <ShareBtn className="h-5" />
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default ProductCard

{
  /* <div className={Styles.main}>
      <div className={Styles.productWrapper}>
        <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={Styles.productImage}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </Link>
        <div className={Styles.content}>
          <p className={Styles.productName}>{product?.title}</p>
          <Price id={product.id as string} />
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <AddToCartBtn type="icon" product={product} />
      </div>
    </div> */
}
