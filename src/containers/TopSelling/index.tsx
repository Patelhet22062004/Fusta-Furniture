import Button from "@/components/common/Button"
import Image from "next/image"
import React from "react"
import TopSellingImage from "@/public/images/TopSellingImage.jpg"

type Props = {}

const TopSelling = (props: Props) => {
  return (
    <section className="flex flex-col md:flex-row justify-center">
      <span className="sr-only">Top Selling</span>
      <div className="flex justify-start md:w-1/2 px-6">
        <div className="relative">
          <Image
            src={TopSellingImage}
            alt="Top Selling Photo"
            className="bg-cover"
          />
          <div className=" absolute z-10 top-1/2 left-0 transform -translate-x-1/2  -rotate-90">
            <span className="md:px-11 md:py-3 px-4 py-2 rounded-full border bg-slate-100  w-72">
              WELCOME TO FUSTA
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center max-md:text-center md:w-1/2">
        <p className="text-4xl">Top Selling !</p>
        <div className="flex max-md:justify-center gap-3 p-2">
          <p className="text-orange-500">$230.00</p>
          <p className="line-through text-base place-self-center">$330.00</p>
        </div>
        <p className="py-4 text-sm sm:text-base">
          Experience the epitome of comfort and style with our top-selling
          furniture piece, the "Harmony Chair." Crafted with precision and
          upholstered in sumptuous fabrics, it offers the perfect blend of
          modern aesthetics and ergonomic support. Designed to complement any
          living space, the Harmony Chair invites you to relax and unwind in
          unparalleled luxury. Redefine your home with this timeless statement.
        </p>
        {/* <button
          type="button"
          className="  pt-1 pr-6 pb-1 pl-6 w-44 text-white hover:bg-black h-12 border-2 bg-orange-600 mb-3"
        >
          SHOP NOW
        </button> */}

        <div className="max-md:justify-center">
          <span className="sr-only">Shop now button</span>
          <Button
            variant="fill"
            color="green"
            as="a"
            href={"http://localhost:8000/products"}
            className="w-1/3 max-md:w-full px-container"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TopSelling
