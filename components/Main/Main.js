/** @format */

import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              {"Let's build something together"}
            </p>
            <h1 className="py-4 text-gray-700">
              {"Hi, I'm "}
              <span className="text-[#5651e5]">Ivan</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
            <p className="py-4 text-gray-400 max-w-[70%] m-auto">
              {" I'm a front-end web developer specializing in building"} (and
              occacionally designing) exceptional digital experiences.
              {" Currently, i'm focused "}on building responsive front-end web
              applications while learning back-end technologies.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link
                  href="https://www.linkedin.com/in/ivan-winter-5a470669"
                  target="_blank">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://github.com/mrwinter09" target="_blank">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="mailto:ivan.winter@gmail.com" target="_blank">
                  <AiOutlineMail />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
    </>
  )
}

export default Main
