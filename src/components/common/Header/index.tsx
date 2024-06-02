import { navbarData, navbarData2 } from "@/lib/constData"
import DesktopNav from "./Desktopnav"
import MobileNav from "./Mobilenav"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-white sticky top-0 z-40">
        <DesktopNav data={navbarData2} />
      </header>
    </>
  )
}

export default Header

{
  /* <>
      <header className="bg-green sticky top-0 z-40">
        <DesktopNav data={navbarData} />
      </header>
    </> */
}
