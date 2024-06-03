"use client"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from "react"
import UserIcon from "@/public/icons/user.svg"
import Link from "next/link"
import clsx from "clsx"
import { useAccount } from "@/lib/context/account-context"
import { useCart } from "medusa-react"

const AccountBtn = () => {
  const { customer, retrievingCustomer, handleLogout } = useAccount()

  if (customer && !retrievingCustomer) {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <span className="sr-only">user account button</span>
            <UserIcon className="h-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={"/account"}
                  className={clsx("block px-4 py-2 ", {
                    "bg-gray/10": !!active,
                  })}
                >
                  Account
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => {
                return (
                  <button
                    type="button"
                    className={clsx(
                      "block px-4 py-2 w-full text-left text-rose-600",
                      {
                        "bg-gray/10": !!active,
                      }
                    )}
                    onClick={() => {
                      handleLogout()
                      // 	handleLogout();
                      // 	customerLogout();
                      // 	resetCart();
                    }}
                  >
                    Logout
                  </button>
                )
              }}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  } else {
    return (
      <Link href={"/login"} scroll={false}>
        <UserIcon className="h-5" />
      </Link>
    )
  }
}

export default AccountBtn

// {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button>
//           <span className="sr-only">user account button</span>
//           <UserIcon className="h-5" />
//         </Menu.Button>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
//           <Menu.Item>
//             {({ active }) => (
//               <Link
//                 href={"/account"}
//                 className={clsx("block px-4 py-2 ", {
//                   "bg-gray/10": !!active,
//                 })}
//               >
//                 Account
//               </Link>
//             )}
//           </Menu.Item>

//           <Menu.Item>
//             {({ active }) => {
//               return (
//                 <button
//                   type="button"
//                   className={clsx(
//                     "block px-4 py-2 w-full text-left text-rose-600",
//                     {
//                       "bg-gray/10": !!active,
//                     }
//                   )}
//                   onClick={() => {
//                     handleLogout()
//                     // 	handleLogout();
//                     // 	customerLogout();
//                     // 	resetCart();
//                   }}
//                 >
//                   Logout
//                 </button>
//               )
//             }}
//           </Menu.Item>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// } else {
//   return (
//     <Link href={"/login"} scroll={false}>
//       <UserIcon className="h-5" />
//     </Link>
//   )
// }
