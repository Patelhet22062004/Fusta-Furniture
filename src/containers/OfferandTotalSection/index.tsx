"use client"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import DiscountCode from "@/modules/checkout/components/discount-code"
import CartTotals from "@/modules/common/components/cart-totals"
import { useCart } from "medusa-react"
import React from "react"

type Props = {}

const OfferandTotalSection = (props: Props) => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <>
      <div className="totalsection flex flex-col max-md:gap-8 max-md:text-center md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center sm:justify-start">
          <DiscountCode cart={cart} />
        </div>

        <div className="total flex flex-col gap-4">
          {/* <h4 className="font-light">Cart Total</h4>
          <div className="grid grid-cols-2">
            <div className="border items-center py-2 font-semibold text-xl pl-2">
              Subtotal
            </div>
            <div className="border items-center py-2 font-semibold text-lg pl-2">
              $ 750.00
            </div>
            <div className="border items-center py-2 font-semibold text-xl pl-2">
              Total
            </div>
            <div className="border items-center py-2 font-semibold text-lg pl-2">
              $ 750.00
            </div>
          </div>
          <div className="flex max-sm:justify-center">
            <Button as="a" href="/checkout" variant="fill" color="green">
              Proceed to Checkout
            </Button>
          </div> */}
          <CartTotals data={cart} />
        </div>
      </div>
    </>
  )
}

export default OfferandTotalSection
