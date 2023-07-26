/** @format */

import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Main from '../components/Main/Main'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ivan Winter | Front-End Developer</title>
        <meta
          name="description"
          content="Meet Ivan Winter, a creative and curious front-end developer from Rotterdam. Skilled in React JS, Next JS, Tailwind, Firebase, Firestore. Ivan is passionate about crafting engaging digital experiences and blending art, innovation, and community for boundless possibilities. Discover how Ivan's expertise can bring fresh perspectives and valuable contributions to your team."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
