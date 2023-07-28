/** @format */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import blogsiteImg from '../public/assets/projects/blogpost.jpg'

const blogpage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt="/"
          src={blogsiteImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Blog Post</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Introducing a dynamic blog site application crafted by me for a
            company. This innovative platform allows users to access the latest
            blogs effortlessly displayed on the first page, ensuring they stay
            up-to-date with the most recent content. On the second page, an
            archive of older posts awaits, offering a rich repository of past
            articles for exploration. This application is powered by React JS
            with Javascript, providing a seamless and engaging user experience.
            To ensure efficient data management and storage, the application is
            hosted on Firebase with a Firestore backend. With a user-friendly
            interface and efficient navigation, this blog site promises an
            enhanced reading experience for visitors, making it an ideal
            solution for your companys content needs.
          </p>
          <button disabled className="px-8 py-4 mt-4 mr-8">
            Demo
          </button>
          <Link href="https://github.com/mrwinter09/sb" target="_blank">
            <button className="px-8 py-4 mt-4">Code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default blogpage
