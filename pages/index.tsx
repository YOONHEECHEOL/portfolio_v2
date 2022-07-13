import type { NextPage } from 'next'
import { useState } from 'react'
import About from '../components/About'
import History from '../components/History'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = (props) => {
  let [prj, setPrj] = useState(props);

  // console.log(prj)

  return (
    <div>
        <About />
        <Skills />
        <History />
      <Projects {...{ prj }} />

      {/* <section>
      </section>

      <section>
      </section>

      <section>
      </section>

      <section>
      </section> */}

    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  let res = await fetch(`http://localhost:3000/api/projectData`)
  let projects = await res.json();

  // console.log(projects)

  return {
    props: {
      projects
    }
  }
}