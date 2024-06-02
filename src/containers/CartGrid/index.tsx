"use client"
import Button from "@/components/common/Button"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import Divider from "@/modules/common/components/divider"
import { useCart, useMeCustomer } from "medusa-react"
import React from "react"
import CartIcon from "@/public/icons/cart.svg"
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"
import CartPageItem from "@/components/CartPageItem"

type Props = {}

const CartGrid = (props: Props) => {
  const { cart } = useCart()
  const { isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <>
      {cart.items.length ? (
        <>
          <div className="flex flex-col gap-8 py-8">
            <p className="flex flex-row text-subtitle1 text-2xl items-baseline text-center">
              In your Cart
            </p>
            <Divider className="mb-6 max-sm:mb-2" />
            <ul
              role="list"
              className="divide-y divide-gray/30 bg-gray/5 rounded-lg max-sm:overflow-scroll"
            >
              <li className="grid grid-cols-6 p-2 gap-4 text-center w-full min-w-[600px]">
                <p className="font-light">Image</p>
                <p className="font-light">Name</p>
                <p className="font-light">Price</p>
                <p className="font-light">Quantity</p>
                <p className="font-light">Total</p>
                <p className="font-light">Remove</p>
              </li>
              {items &&
                items
                  .sort((a, b) => {
                    return a.created_at > b.created_at ? -1 : 1
                  })
                  .map((item) => <CartPageItem key={item.id} item={item} />)}
            </ul>
            <div className="flex justify-start gap-4">
              <Button as="a" href="/products" variant="fill" color="green">
                Continue Shopping
              </Button>
              <Button as="a" href="/checkout" variant="fill" color="green">
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
          <span>
            <CartIcon className="w-8 h-8" />
          </span>
          <p>Your cart is empty</p>
          <a href="/products" className="text-blue-600">
            Continue Shopping
          </a>
        </div>
      )}
    </>
  )

  // return (
  //   <div className="flex flex-col gap-8 py-8">
  //     <Divider className="my-6 small:hidden" />
  //     <p className="flex flex-row text-subtitle1 items-baseline">
  //       In your Cart
  //     </p>
  //     <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />

  //     <div className="flex flex-col gap-16">
  //       <div className="flex flex-col w-full gap-2 max-sm:justify-centers sm:flex-row sm:w-1/2">
  //         <div className="flex justify-center">
  //           {/* <Button variant="fill" color="green">
  //             Update Cart
  //           </Button> */}
  //         </div>
  //         <div className="flex justify-center">
  //           <Button as="a" href="/products" variant="fill" color="green">
  //             Continue Shopping
  //           </Button>
  //         </div>
  //         <div className="flex justify-center">
  //           {/* <Button variant="fill" color="green">
  //             Clear Cart
  //           </Button> */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default CartGrid
