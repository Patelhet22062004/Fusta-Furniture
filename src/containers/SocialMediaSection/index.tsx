import Image from "next/image"
import React from "react"
import Image1 from "@/public/images/SubscribeSectionImage1.jpg"
import Image2 from "@/public/images/SubscribeSectionImage2.jpg"
import Instagram from "@/public/icons/instagram.svg"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"

type Props = {}

const SubscribeSection = (props: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4">
        <div className=" ">
          <h3 className="col-span-1 md:col-span-2 text-2xl mb-5 md:text-center text-center">
            Follow us on Instagram{" "}
            <a href="#" className="hover:text-orange-500">
              @furniture
            </a>
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 ml-0 items-center lg:justify-start">
            <div className=" bg-slate-600 relative group">
              <div>
                <Image
                  src={Image1}
                  alt="network slow"
                  className="group-hover:opacity-50"
                />
              </div>
              <div className="z-10 flex justify-center absolute bottom-1/4 inset-x-1/2 opacity-0 transition duration-500 scale-0 group-hover:opacity-100 group-hover:-translate-y-14 group-hover:scale-100 items-center">
                <div className=" w-10 h-10 cursor-pointer text-white hover:text-orange-500 flex justify-center items-center">
                  <Instagram className="h-10" />
                </div>
              </div>
            </div>
            <div className="bg-slate-600 relative group">
              <div>
                <Image
                  src={Image2}
                  alt="network slow"
                  className="group-hover:opacity-50"
                />
              </div>
              <div className="z-10 flex justify-center absolute bottom-1/4 inset-x-1/2 opacity-0 transition duration-500 scale-0 group-hover:opacity-100 group-hover:-translate-y-14 group-hover:scale-100 items-center">
                <div className=" w-10 h-10 cursor-pointer text-white hover:text-orange-500 flex justify-center items-center">
                  <Instagram className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center max-md:justify-center ">
          <div className=" flex flex-col w-screen items-center  gap-4 ">
            <h1 className="text-2xl md:text-4xl font-medium items-center pt-4">
              Subscribe
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit, consect adipisicing elit.{" "}
            </p>
            {/* <div className="flex flex-col  max-sm:w-screen items-center px-3">
              <label htmlFor="email" className=" m-screen sr-only">
                Enter E-mail
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 rounded-none w-full"
              ></input>
            </div> */}
            <Input
              name="email"
              placeholder="Enter Your Email "
              className="rounded-none p-2"
            />
            <Button
              variant="fill"
              color="green"
              as="a"
              href={"/products"}
              className="!rounded-full"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
