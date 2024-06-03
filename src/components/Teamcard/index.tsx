import React from "react"
import LinkedIn from "@/public/icons/linkedin.svg"
import Instagram from "@/public/icons/instagram.svg"
import Image from "next/image"
import pic1 from "../../../../public/icon/het.jpg"
import Github from "@/public/icons/github-mark.svg"
import "src/components/Teamcard/Team.component.css"
type Props = {
  source: string
  name: string
  skill: string
  alt: string
  link1: string
  link2: string
  link3: string
}

const Member = ({ source, alt, name, skill, link1, link2, link3 }: Props) => {
  return (
    <div className="responsive-cell-block rounded-2xl shadow-xl bg-white hover:scale-110 duration-300 dwk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
      <div className="team-card">
        <div className="img-wrapper p-5">
          <Image
            src={source}
            alt={alt}
            className="  w-[280px] group-hover:w-32 group-hover:h-[280px] object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />{" "}
        </div>
        <p className="text-blk name">{name}</p>
        <p className="text-blk position">{skill} </p>
        <div className="social-media-links pb-5">
          <a href={link1} target="_blank">
            <Github className="w-5 hover:text-purple-800 h-5" />
          </a>

          <a href={link2} target="_blank">
            <Instagram className="w-5  hover:text-pink-600 h-5" />
          </a>

          <a href={link3} target="_blank">
            <LinkedIn className="w-5 hover:text-blue-500 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Member
