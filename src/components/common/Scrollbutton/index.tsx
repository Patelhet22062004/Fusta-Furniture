"use client"
import React, { useState } from "react"
import ArrowIcon from "@/public/icons/chevron-right.svg"
import Styles from "./Scrollbutton.module.css"

type Props = {}

const Scrollbutton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 400) {
      setVisible(true)
    } else if (scrolled <= 400) {
      setVisible(false)
    }
  }

  window.addEventListener("scroll", toggleVisible)

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      }}
      className={Styles.main}
      style={{ display: visible ? "inline" : "none" }}
    >
      <div className={Styles.icon}>
        <ArrowIcon className="-rotate-90 h-8" />
      </div>
    </button>
  )
}

export default Scrollbutton
