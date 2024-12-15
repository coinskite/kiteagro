"use client";

import { useState } from 'react';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

// import Hamburger from '../../svg/actions/hamburger.svg';
// import Close from '../../svg/actions/close.svg';

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="p-4 sm:px-6 lg:px-8 sticky top-0 z-[2] bg-white shadow-sm">
      <div className='df gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto'>
        <img
          className="mr-auto"
          src="/img/logos/kiteagro.png"
          alt=""
        />

        <div className={`py-8 md:py-0 inset-x-0 flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 absolute md:relative top-16 md:top-0 ${open ? "flex" : "hidden md:flex"} bg-white text-[#22C954]`}>
          <Link href="/">
            Buyer
          </Link>

          <Link href="/">
            Seller
          </Link>

          <Link href="/price">
            Mandi price
          </Link>

          <Link href="/">
            Career
          </Link>

          <Link href="/">
            About us
          </Link>
        </div>

        <button
          onClick={() => setOpen(p => !p)}
          className="p-0 md:hidden text-[#22C954]"
        >
          {
            open
              ? <IoClose />
              : <GiHamburgerMenu />
          }
        </button>
      </div>
    </nav>
  )
}

export default Nav