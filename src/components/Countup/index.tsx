"use client"
import React, { useEffect, useState } from "react"

interface CountUpProps {
  targetNumber: number
}

const CountUp: React.FC<CountUpProps> = ({ targetNumber }) => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    let animationFrameId: number

    const animateCount = () => {
      setCount((prevCount) => {
        const increment = prevCount < targetNumber ? 1 : 0 // Increment only if count is less than targetNumber
        return prevCount + increment
      })

      if (count < targetNumber) {
        animationFrameId = requestAnimationFrame(animateCount)
      }
    }

    const animateWithDelay = () => {
      setTimeout(() => {
        animateCount()
      }, 1000) // Adjust the delay (in milliseconds) to control the animation speed
    }

    animateWithDelay()

    return () => cancelAnimationFrame(animationFrameId)
  }, [count, targetNumber])

  return (
    <div className="text-center">
      <div className="text-3xl lg:text-6xl font-semibold ">{count}</div>
    </div>
  )
}

export default CountUp
