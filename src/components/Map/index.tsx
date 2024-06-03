// "use client"
// import React from "react"
// import Map from "ol/Map"
// import View from "ol/View"
// import TileLayer from "ol/layer/Tile"
// import XYZ from "ol/source/XYZ"

// new Map({
//   target: "map",
//   layers: [
//     new TileLayer({
//       source: new XYZ({
//         url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
//       }),
//     }),
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2,
//   }),
// })

// type Props = {}

// const MapDisplay = (props: Props) => {
//   return <div id="map" className="w-full h-96"></div>
// }

// export default MapDisplay

import React from "react"

type Props = {}

const MapDisplay = (props: Props) => {
  return (
    <div className="p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5334773508935!2d72.53769037509473!3d23.11416777910965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d506ef6f0f%3A0x550c5bf579c81861!2sThe%20Special%20Character!5e0!3m2!1sen!2sin!4v1705639808401!5m2!1sen!2sin"
        // width="600"
        // height="800"
        className=" md:w-full md:h-[800px] w-screen h-[300px] "
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapDisplay
