import Image from "next/image"
import Link from "next/link"
import { LineItem } from "@medusajs/medusa"
import CounterBtn from "../products/CounterBtn"
import RemoveFromCartBtn from "../products/RemoveFromCartBtn"

type Props = {
  item: LineItem
}

const CartPageItem = ({ item }: Props) => {
  return (
    <li className="grid grid-cols-6 p-3 gap-4 justify-center items-center w-full min-w-[600px] text-center">
      <div className="flex justify-center overflow-hidden border max-w-[150px] relative border-gray/30 aspect-square">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <Link
        href={`/products/${item.variant.product.handle}`}
        className="text-body2 font-light line-clamp-1"
      >
        {item.title}
      </Link>

      <span className="text-body2 font-light">
        ₹{Number(item?.unit_price / 100).toFixed(2)}
      </span>

      <div className="flex justify-center">
        <CounterBtn size="sm" cartItem={item} />
      </div>

      <span className="text-body2 font-light">
        ₹{Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
      </span>

      <div className="flex justify-center">
        <RemoveFromCartBtn id={item.id} />
      </div>
    </li>
  )
}

export default CartPageItem
