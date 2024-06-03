"use client"
import React, { useState } from "react"
import DownArrowIcon from "@/public/icons/left-arrow.svg"

type Props = {}

const HeaderWelcome = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className="py-2 grid grid-cols-1 md:grid-cols-2 bg-[#E97730] z-50 text-white font-semibold">
      <div className=" text-center  md:text-start">Welcome To Fusta</div>
      <div className="relative flex justify-center items-center md:justify-end ">
        <button type="button" onClick={toggleMenu}>
          India USD($)
        </button>
        <DownArrowIcon
          className="-rotate-90 cursor-pointer h-5"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute right-0 bg-[#333333] flex flex-col text-center z-50 top-5">
            <a href="#" className="hover:text-[#E97730]">
              Argentina USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Algeria USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Afghanistan USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Angola USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Australia USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Austria USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Albania USD($)
            </a>
            <a href="#" className="hover:text-[#E97730]">
              Armenia USD($)
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeaderWelcome
