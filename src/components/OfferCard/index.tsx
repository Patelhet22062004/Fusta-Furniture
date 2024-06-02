import { offerDataType } from "@/utils/types"
import Image from "next/image"
import React from "react"
import Button from "../common/Button"
import Styles from "./offercard.module.css"

type Props = {}

const OfferCard = ({ data }: offerDataType) => {
  return (
    <>
      <div
        className={` ${Styles.shimmer_div} relative group hover:scale-105 shadow-md shadow-slate-400 duration-500 overflow-hidden`}
      >
        <div className="aspect-video">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={data.image}
            alt="image not found"
            className=""
          />

          <div className="absolute inset-0 z-10 flex flex-col flex-shrink justify-center items-start text-white bg-black bg-opacity-30 px-6">
            <h3 className="text-lg md:text-2xl">{data.discount}</h3>
            <h2 className="text-2xl md:text-4xl font-bold">{data.title}</h2>
            <Button variant="outlined" href="n dev" color="light">
              SHOP NOW{" "}
            </Button>
          </div>
        </div>
        <div
          className={`${Styles.bg_shimmer_banner} group-hover:opacity-100`}
        ></div>
      </div>
    </>
  )
}

export default OfferCard
