import React from "react"
import { contactDetails } from "@/lib/constData"
import ContactDetailCard from "@/components/ContactDetailCard"
import ContactForm from "@/containers/ContactForm"
import style from "./contact.module.css"
import MapDisplay from "@/components/Map"

const ContactUsSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className={style.contactContainer}>
          <div className={style.contactDetailWrapper}>
            <h4 className="font-light">Get in Touch</h4>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              illo quas fugit ab eaque numquam excepturi explicabo minima
              inventore ad est, possimus aliquid itaque ipsa voluptas. Aperiam
              ex sequi ab!
            </span>
            {contactDetails &&
              contactDetails.map((item) => {
                return <ContactDetailCard key={item.id} data={item} />
              })}
          </div>
          <ContactForm />
        </div>
        <div className="w-1/2">
          <MapDisplay />
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection

{
  /* <section>
      <div className={style.contactContainer}>
        <div className={style.contactDetailWrapper}>
          {contactDetails &&
            contactDetails.map((item) => {
              return <ContactDetailCard key={item.id} data={item} />
            })}
        </div>
        <ContactForm />
      </div>
    </section> */
}
