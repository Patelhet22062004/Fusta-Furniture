import CountUp from "@/components/Countup/index"
import React from "react"

interface Props {}

const CountSection: React.FC<Props> = () => {
  return (
    <section>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-center items-center">
        <div className="w-full  md:w-1/4">
          <div className="single-count font-sans  text-center">
            <div className="count-title">
              <CountUp targetNumber={21} />
              <p>Years In Business</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="single-count text-center">
            <div className="count-title">
              <CountUp targetNumber={210} />
              <p>Clients And Partners</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="single-count text-center">
            <div className="count-title">
              <CountUp targetNumber={18} />
              <p>Show Room</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="single-count text-center">
            <div className="count-title">
              <CountUp targetNumber={17} />
              <p>Billon Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountSection
