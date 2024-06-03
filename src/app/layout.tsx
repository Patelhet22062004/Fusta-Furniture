import Providers from "@/modules/providers"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeaderWelcome from "@/components/common/Header/HeaderWelcome"
import HeadOfferMenu from "@/components/common/Header/HeaderOffer"

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} relative font-sans`}>
        <Providers>
          <HeadOfferMenu />
          <HeaderWelcome />
          <Header />
          {children}
          {modal}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
