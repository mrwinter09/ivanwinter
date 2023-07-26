/** @format */

import React from 'react'
import Project from './ProjectItem'
import cryptoImg from '../../public/assets/projects/crypto.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import properyImg from '../../public/assets/projects/property.jpg'
import twitchImg from '../../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{"What i've build"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            image={cryptoImg}
            title="Crypto Blogsite"
            projectUrl="/property"
          />
          <Project
            image={netflixImg}
            title="Netflix Clone"
            projectUrl="/property"
          />
          <Project
            image={properyImg}
            title="Propery Finder"
            projectUrl="/property"
          />
          <Project
            image={twitchImg}
            title="Twitch Clone"
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
