/** @format */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  console.log(nav)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className="fixed w-full h-50 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image
            src="/../public/assets/ivanwinter.png"
            alt="/"
            width="125"
            height="50"
          />
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Project
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 '
              : ''
          }>
          <div
            className={
              nav
                ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            }>
            <div>
              {/*  */}
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/../public/assets/ivanwinter.png"
                  alt="/"
                  width="87"
                  height="35"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  {' '}
                  <AiOutlineClose size={25} />
                </div>
              </div>
              {/*  */}
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Lets Build something legendary together
                </p>
              </div>
              {/*  */}
              <div>
                <div className="py-4 flex flex-col">
                  <ul className="uppercase">
                    <Link href="/">
                      <li className="py-4 text-sm">Home</li>
                    </Link>
                    <Link href="/">
                      <li className="py-4 text-sm">About</li>
                    </Link>
                    <Link href="/">
                      <li className="py-4 text-sm">Skills</li>
                    </Link>
                    <Link href="/">
                      <li className="py-4 text-sm">Projects</li>
                    </Link>
                    <Link href="/">
                      <li className="py-4 text-sm">Contact</li>
                    </Link>
                  </ul>
                  <div className="pt-40">
                    <p className="uppercase tracking-widest text-[#5651e5]">
                      Lets Connect
                    </p>
                    <div className="flex item-center justify-between my-4 w-full sm:w-[80%]">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Link
                          href="https://www.linkedin.com/in/ivan-winter-5a470669"
                          target="_blank">
                          <FaLinkedinIn />
                        </Link>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Link
                          href="https://github.com/mrwinter09"
                          target="_blank">
                          <FaGithub />
                        </Link>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Link
                          href="mailto:ivan.winter@gmail.com"
                          target="_blank">
                          <AiOutlineMail />
                        </Link>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Link
                          href="https://www.linkedin.com/in/ivan-winter-5a470669"
                          target="_blank">
                          <BsFillPersonLinesFill />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
