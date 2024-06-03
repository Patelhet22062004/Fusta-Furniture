import React from "react"
import I1 from "@/public/images/PartnerImage (1).jpg"
import I2 from "@/public/images/PartnerImage (2).jpg"
import I3 from "@/public/images/PartnerImage (3).jpg"
import I4 from "@/public/images/PartnerImage (4).jpg"
import I5 from "@/public/images/PartnerImage (5).jpg"
import Image from "next/image"

type Props = {}

const PartnerSection = (props: Props) => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-5 py-8 bg-transparent">
        <div className="flex justify-center items-center">
          <Image src={I1} alt="1" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={I2} alt="1" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={I3} alt="1" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={I4} alt="1" />
        </div>
        <div className=" justify-center items-center hidden md:block ">
          <Image src={I5} alt="1" />
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
