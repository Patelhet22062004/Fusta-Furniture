import { footerData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"
import NewsLetter from "@/components/NewsLetter"
import LocationIcon from "@/public/icons/location.svg"
import MailIcon from "@/public/icons/email.svg"
import PhoneIcon from "@/public/icons/phone.svg"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        {/* <p className={styles.heading}>{footerData.heading}</p> */}
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            {/* <p className={styles.description}>{footerData.description}</p> */}
            {/* <SocialIcons /> */}
            <div className={styles.linkHeading}>My Account</div>
            <div className="inline-flex justify-start items-start gap-2">
              <LocationIcon className="h-5" />
              <Link href="/" className={styles.link}>
                184 Main RD E, St Albans VIC 3021, Austrlia.
              </Link>
            </div>
            <div className="inline-flex items-start gap-1">
              <MailIcon className="h-5" />
              <Link href="/" className={styles.link}>
                Mail Us: yourmail@gmail.com
              </Link>
            </div>
            <div className="inline-flex items-start gap-1">
              <PhoneIcon className="h-5" />
              <Link href="/" className={styles.link}>
                Call Us: +00 123 456 789
              </Link>
            </div>
          </div>
          <div className={styles.footerLinks}>
            {footerData?.footerLinks2?.map((item, index) => {
              return (
                <div key={index} className={styles.footerLinkSection}>
                  {item?.map((link) => {
                    if (link.id == 0)
                      return (
                        <Link
                          key={link.id}
                          href={link.url}
                          className={styles.linkHeading}
                        >
                          {link.title}
                        </Link>
                      )
                    else
                      return (
                        <Link
                          key={link.id}
                          href={link.url}
                          className={styles.link}
                        >
                          {link.title}
                        </Link>
                      )
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <hr className="opacity-30" />
        <div className={styles.copyrightWrapper}>
          <p className="sm">{footerData.copyright2.description}</p>
          <div className={styles.copyrightLinks}>
            {footerData.copyright2.links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.copyrightLink}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
          <SocialIcons />
        </div>
      </footer>
    </div>
  )
}

export default Footer

{
  /* <div className={styles.footerWrapper}>
      <div className={styles.footerImageWrapper}>
        <Image
          fill
          src={footerData.footerImage}
          alt="footer image"
          className="object-contain"
        />
      </div> */
}
{
  /* newsletter */
}
//   <NewsLetter />
//   <footer className={styles.footer}>
//     <p className={styles.heading}>{footerData.heading}</p>
//     <div className={styles.footerDataWrapper}>
//       <div className={styles.descriptionWrapper}>
//         <p className={styles.description}>{footerData.description}</p>
//         <SocialIcons />
//       </div>
//       <div className={styles.footerLinks}>
//         {footerData?.footerLinks?.map((item, index) => {
//           return (
//             <div key={index} className={styles.footerLinkSection}>
//               {item?.map((link) => {
//                 return (
//                   <Link
//                     key={link.id}
//                     href={link.url}
//                     className={styles.link}
//                   >
//                     {link.title}
//                   </Link>
//                 )
//               })}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//     <hr className="opacity-30" />
//     <div className={styles.copyrightWrapper}>
//       <p className="sm">{footerData.copyright.description}</p>
//       <div className={styles.copyrightLinks}>
//         {footerData.copyright.links.map((link) => {
//           return (
//             <Link
//               key={link.id}
//               href={link.url}
//               className={styles.copyrightLink}
//             >
//               {link.title}
//             </Link>
//           )
//         })}
//       </div>
//     </div>
//   </footer>
// </div>
