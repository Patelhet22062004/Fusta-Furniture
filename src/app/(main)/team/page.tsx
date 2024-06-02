import React from "react"
import pic2 from "@/public/images/het.jpg"
import pic3 from "@/public/images/dipesh.jpg"
import pic1 from "@/public/images/shlok.jpeg"
import pic4 from "@/public/images/kirtan.jpg"
import pic5 from "@/public/images/raghvendra.jpg"
import pic6 from "@/public/images/smit.jpeg"
import pic7 from "@/public/images/Poornima.jpeg"
import pic8 from "@/public/images/maitri.jpeg"
import Image from "next/image"
import Member from "@/components/Teamcard"
import Teamlogo from "@/public/images/Teamlogo.jpeg"

type Props = {}

const Teampage = (props: Props) => {
  return (
    <>
      {/* style={{backgroundImage: 'url(/icon/team.jpg)',height:"auto" ,width:"auto" }} */}
      <div className="responsive-container-block outer-container">
        <div className="responsive-container-block inner-container">
          <h3>
            {/* Caffeine Coders */}
            {/* <img src={Teamlogo} alt="teamlogo" /> */}
            <Image src={Teamlogo} alt="teamlogo" />
          </h3>
          <p className="text-blk section-subhead-text text-slate-600"></p>
          <div className="responsive-container-block">
            <Member
              source={pic1}
              alt="vrnla"
              name="Shlok Solanki"
              skill="Team Leader"
              link1="https://github.com/shlok580"
              link2=""
              link3="https://www.linkedin.com/in/shlok-solanki-2a423b2a6/"
            />
            <Member
              source={pic2}
              alt="vrnla"
              name="Patel Het"
              skill="Developer"
              link1="https://github.com/Patelhet22062004"
              link2=" https://www.instagram.com/het__patel2264?igsh=YzhhYnZidWg4NGhn"
              link3="https://www.linkedin.com/in/het-patel-551547264/"
            />
            <Member
              source={pic3}
              alt="vrnla"
              name="Dipesh Mali"
              skill="Developer"
              link1="https://github.com/dipesh1186"
              link2="https://www.instagram.com/dipesh_tank416?igsh=Z3RrdTN1dGJuZzl5"
              link3="https://www.linkedin.com/in/dipesh-mali-99426826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <Member
              source={pic4}
              alt="vrnla"
              name="Kirtan Kathiriya"
              skill="Developer"
              link1="https://github.com/kirtankathiriya"
              link2=" https://www.instagram.com/kirtan_kathiriya_?igsh=emJzMjIwMDBwdXB6"
              link3=" https://www.linkedin.com/in/kirtan-kathiriya-06b14723a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Member
              source={pic5}
              alt="vrnla"
              name="Raghvendra Rajput"
              skill="Developer"
              link1="https://github.com/19Raghvendra"
              link2="https://www.instagram.com/19.raghavvv?igsh=OHBzMngyYWNzYzI2"
              link3="https://www.linkedin.com/in/raghvendra-singh-rajput-396b9920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Member
              source={pic6}
              alt="vrnla"
              name="Smit Patel"
              skill="Developer"
              link1="https://github.com/smitpatel16"
              link2="https://www.instagram.com/smit_patel_1605?igsh=MTE2ZWh4NDF5bzJsYg=="
              link3=" https://www.linkedin.com/in/smit-patel-b79038245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                            "
            />

            <Member
              source={pic7}
              alt="vrnla"
              name="Poornima Pandey"
              skill="Developer"
              link1="https://github.com/poornimapandey11"
              link2="https://www.instagram.com/xpoornima?igsh=YzRzYmZ5MXZ0Y3M2"
              link3="https://www.linkedin.com/in/poornima-pandey-80500a232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />

            <Member
              source={pic8}
              alt="vrnla"
              name="Maitri Patel"
              skill="Developer"
              link1=""
              link2=""
              link3=""
            />
          </div>
          <h1 className="text-2xl font-semibold">
            "Caffeine-Fueled Creations in Code"
          </h1>
        </div>
      </div>
    </>
  )
}

export default Teampage
