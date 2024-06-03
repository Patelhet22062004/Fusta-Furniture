import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import style from "./productDetails.module.css"
import Rating from "../Rating"
import Star from "@/public/icons/star.svg"
import Button from "@/components/common/Button"
import AppleIcon from "@/public/images/apple_pay.svg"
import AmazonIcon from "@/public/images/amazon.svg"
import BitcoinIcon from "@/public/images/bitcoin.svg"
import GooglepayIcon from "@/public/images/google_pay.svg"
import PaypalpaytmIcon from "@/public/images/paypal-paytm.svg"
import VisaIcon from "@/public/images/visa.svg"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductDetails = ({ product }: ProductTemplateProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <h3 className="font-bold max-md:hidden">{product?.title}</h3>
      {/* <p className="font-bold max-md:hidden text-body2">{product?.subtitle}</p> */}
      <p className="font-light max-md:hidden">product subtitle</p>

      <span>
        <Rating rating={4} />
      </span>
      <Price id={product.id as string} />
      {/* <Rating reviewCount={5} rating={3} /> */}
      <div>
        <p className="flex flex-wrap gap-2">
          <span className="font-bold">Category: </span>
          <span>{product?.type?.value}</span>
        </p>
        {product?.options?.map((option) => {
          return (
            <p key={option.id} className="flex flex-wrap gap-2">
              <span className="font-bold capitalize">{option?.title}: </span>
              <span className="flex flex-wrap gap-4">
                {option.values.map((value) => {
                  return <span key={value.id}>{value?.value}</span>
                })}
              </span>
            </p>
          )
        })}
      </div>
      <div className="flex flex-row w-1/2 gap-2">
        <div className="">
          <AddToCartBtn product={product} />
        </div>
        <div>
          <Button variant="outlined" color="dark">
            <span className="sr-only">add to card button</span>
            {/* <Plus className="h-6" /> */}
            <Star className="h-6 text-green" />
          </Button>
        </div>
      </div>
      <div className="text-[12px]">Guaranteed safe checkout</div>
      <div className="flex gap-2 py-2">
        <AppleIcon className="h-6" />
        <AmazonIcon className="h-6" />
        <BitcoinIcon className="h-6" />
        <GooglepayIcon className="h-6" />
        <PaypalpaytmIcon className="h-6" />
        <VisaIcon className="h-6" />
      </div>

      {/* <div className={`${style.prose} prose`}>
        <ReactMarkdown>{product?.description}</ReactMarkdown>
      </div> */}
      {product.metadata &&
        Object.entries(product?.metadata).map(([key, value]) => (
          <span key={key} className="flex flex-wrap gap-2">
            <p className="font-bold uppercase">{key}:</p>
            <div className={`${style.prose} prose`}>
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </span>
        ))}
    </div>
  )
}

export default ProductDetails
