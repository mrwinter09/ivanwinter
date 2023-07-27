/** @format */

import React from 'react'
import about from '/public/assets/about.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who i am</h2>
            <p className="py-2 text-gray-600">
              {'//I am not your normal developer'}
            </p>
            <p className="py-2 text-gray-600">
              Over the last 7 years, my journey began in the theater world,
              where I immersed myself in screenwriting. Alongside this artistic
              pursuit, I discovered a natural affinity for technology and
              computers. In 2019, while making minor edits to a small business
              website I was operating, I stumbled upon HTML & CSS. Little did I
              know that this seemingly small task would ignite a profound love
              for programming. Fascinated with how intricate programming can be,
              I was quickly drawn to learn more. I started learning JavaScript
              and became even more enthused with making websites interactive. I
              then pursued a web development education, during which I built a
              captivating Pokemon battle system.
            </p>{' '}
            <p className="py-2 text-gray-600">
              Currently, I am skilled in React JS, Next JS, Tailwind, and
              Firebase. My fervor lies in crafting engaging digital experiences,
              infusing art, innovation, and community to unlock boundless
              possibilities. Discovering how my expertise can bring fresh
              perspectives and valuable contributions to your team excites me.
              As I continue to build projects and learn, I am passionate about
              the limitless potential that lies ahead in my front-end
              development career.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </div>
          <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={about} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
