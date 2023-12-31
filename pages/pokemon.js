/** @format */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import pokemonImg from '../public/assets/projects/pokemon.jpg'

const pokemon = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt="/"
          src={pokemonImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Pokemon</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search for Pokemon to see their stats, and if they
            create an account, they can engage in battles to determine the
            better Pokemon. User authentication is available, allowing users to
            sign up and sign in to their accounts using an email address. This
            functionality is made possible with Firebase. As part of my
            education at Novi Collega Web Development, I developed this
            application to graduate. It allowed me to apply my skills in React
            JS and Firebase to create an interactive and engaging user
            experience. I am passionate about web development and continually
            strive to enhance my expertise in the field.
          </p>
          <button disabled className="px-8 py-4 mt-4 mr-8">
            Demo
          </button>
          <Link
            href="https://github.com/mrwinter09/pokemon2023"
            target="_blank">
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

export default pokemon
