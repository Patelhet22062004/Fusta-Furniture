import React from "react"
import OfferCard from "@/components/OfferCard"
import { offerData } from "@/lib/constData"
type Props = {}

function OfferSection({}: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[50%_1fr] gap-5">
        {offerData.data.map((item) => {
          return <OfferCard data={item} />
        })}
      </div>
    </section>
  )
}

export default OfferSection

{
  /* <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
        <div className="relative">
          <Image
            src={OfferImage1}
            alt="yellow chair photo"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-30 p-6">
            <h3 className="text-lg sm:text-2xl">30% Off</h3>
            <h2 className="text-2xl sm:text-4xl font-bold">Chair Collection</h2>
            <a
              href="/"
              className="mt-4 px-3 sm:px-6 py-2 bg-yellow hover:bg-yellow-400 rounded-md text-black sm:text-lg font-semibold uppercase"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src={OfferImage2}
            alt="yellow chair photo"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-30 p-6">
            <h3 className="text-lg sm:text-2xl">30% Off</h3>
            <h2 className="text-2xl sm:text-4xl font-bold">Chair Collection</h2>
            <a
              href="/"
              className="mt-4 px-3 sm:px-6 py-2 bg-red-500 hover:bg-red-400 rounded-md text-black sm:text-lg font-semibold uppercase"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section> */
}
