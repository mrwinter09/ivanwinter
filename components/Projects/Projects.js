/** @format */

import React from 'react'
import Project from './ProjectItem'
import cryptoImg from '../../public/assets/projects/winterdao.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import blogsiteImg from '../../public/assets/projects/blogpost.jpg'
import pokemonImg from '../../public/assets/projects/pokemon.jpg'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{"What i've build"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            image={cryptoImg}
            title="Crypto Blogsite"
            projectUrl="/winterdao"
          />
          <Project
            image={netflixImg}
            title="Netflix Clone"
            projectUrl="/netflix"
          />
          <Project
            image={blogsiteImg}
            title="NewsBlog Site"
            projectUrl="/blogpage"
          />
          <Project
            image={pokemonImg}
            title="Pokemon Battle App"
            projectUrl="/pokemon"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
