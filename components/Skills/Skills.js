/** @format */

import React from 'react'
import Image from 'next/image'
import HTML from '/public/assets/skills/html.png'
import CSS from '/public/assets/skills/css.png'
import JAVASCRIPT from '/public/assets/skills/javascript.png'
import REACT from '/public/assets/skills/react.png'
import TAILWIND from '/public/assets/skills/tailwind.png'
import FIREBASE from '/public/assets/skills/firebase.png'
import GITHUB from '/public/assets/skills/github1.png'
import NEXTJS from '/public/assets/skills/nextjs.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What i can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={HTML} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={CSS} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={JAVASCRIPT} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={REACT} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={TAILWIND} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={FIREBASE} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={GITHUB} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="64" height="64" src={NEXTJS} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
