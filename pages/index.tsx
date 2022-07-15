import type { NextPage } from 'next'
import { useState } from 'react'
import About from '../components/About'
import FooterInfo from '../components/FooterInfo'
import History from '../components/History'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import _s from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  let [prj, setPrj] = useState(props);

  let [act, setAct] = useState();

  return (
    <div>
      <div className={_s.container}>

        {/* mv */}
        <section className={_s.mv} />

        {/* 자기소개 */}
        <section>
          <About />
        </section>

        {/* 기술 */}
        <section>
          <Skills />
        </section>

        {/* 경험 */}
        <section>
          <History />
        </section>

        {/* 프로젝트 경험 */}
        <section>
          <Projects {...{ prj }} />
        </section>

        <section>
          <FooterInfo />
        </section>

      </div>
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