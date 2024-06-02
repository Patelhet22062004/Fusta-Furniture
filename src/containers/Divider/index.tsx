import Button from "@/components/common/Button"
import React from "react"

type Props = {}

const DividerSection = () => {
  return (
    <div className="py-8">
      <div
        className="Breadcrumb  text-center bg-no-repeat bg-scroll bg-center bg-cover bg-white"
        style={{ backgroundImage: "url(/images/DividerImage.jpg)" }}
      >
        <section>
          <div className="container max-w-screen-xl">
            <div className="flex flex-wrap max-sm:justify-center">
              <div className="col basis-7/12">
                <div className="flex flex-col gap-2 sm:gap-4 text-justify max-w-fit  sm:text-left">
                  <h3 className=" leading-8 text-2xl sm:leading-10 md:text-3xl md:leading[55px]-10 font-light ">
                    Contrary to popular belief is not simply rand.
                  </h3>
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incidz lorem ipsum dolor sit amet,
                    consectetur adipisicing elit sed do eiusmod tempor incid{" "}
                  </p>
                  <Button
                    variant="fill"
                    color="green"
                    as="a"
                    href={"/products"}
                    className=" md:w-1/4"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DividerSection
