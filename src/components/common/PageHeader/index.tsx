import React from "react"
import pictureCommon from "@/public/images/PageHeaderImage.jpg"

type Props = {
  Name: string
}

const PageHeader = ({ Name }: Props) => {
  const divStyle = {
    backgroundImage: `url(${pictureCommon.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "250px",
  }

  return (
    <div className="relative">
      <div
        className="w-full place-content-center text-center flex flex-col"
        style={divStyle}
      >
        <h4>{Name}</h4>
        <div className="flex flex-row justify-center gap-4">
          <a href="/">
            <p className="hover:text-green">Home</p>
          </a>
          <p>/</p>
          <a href="#">
            <p className="text-green">{Name}</p>
          </a>
        </div>
      </div>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-black text-2xl font-bold tracking-widest">
          {Name}
        </h2>
        <div className="flex flex-row">
          <h4 className="hover:text-orange-500">
            <a href="http://localhost:3000/">Home</a>
          </h4>
          <h4 className="mr-2 ml-2 mt-2">/</h4>
          <h4>
            <a href="#">{Name}</a>
          </h4>
        </div>
      </div> */}
    </div>
  )
}

export default PageHeader
