"use client"
import React, { useState } from "react"
import Button from "../../Button"

type Props = {}

const HeadOfferMenu = (props: Props) => {
  const [topBarVisible, setTopBarVisible] = useState(true)
  const hideTopBar = () => {
    setTopBarVisible(false)
  }

  return (
    <>
      {/* header offer menu  */}
      {topBarVisible && (
        <section className="top-0 *:items-center bg-gradient-to-r from-[#600300] to-[#092f00] flex items-center py-2 justify-center align-middle gap-2 flex-col md:flex-row">
          <h3 className="text-white flex text-sm m-0">
            All Featured Product 50% Off
          </h3>

          <div className="flex items-center flex-row md:flex-cols justify-between">
            <Button
              variant="outlined"
              as="a"
              href="/products"
              className="text-white text-sm rounded border-2 border-white !px-2 !py-1 bg-black hover:bg-slate-400 "
            >
              Shop Now
            </Button>
            {/* <button className="text-white border-2 border-white absolute bg-transparent w-7 rounded-sm hover:bg-slate-400 right-3 md:right-5" type="button" onClick={hideTopBar}>X</button> */}
            <button
              className="text-white border-2 border-white absolute bg-transparent w-5 text-xs rounded-sm hover:bg-slate-400 right-3 md:right-5"
              type="button"
              onClick={hideTopBar}
            >
              X
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default HeadOfferMenu
