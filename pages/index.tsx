import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import About from '../components/About'
import FooterInfo from '../components/FooterInfo'
import History from '../components/History'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import _s from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  let [prj, setPrj] = useState(props);

  const about = useRef(null);

  let [act, setAct] = useState([
    // mv
    {
      type: 'sticky',
      heightMultiple: 5,
      scrollHeight: 0,
      obj: {}
    },
    // About
    {
      type: 'sticky',
      heightMultiple: 5,
      scrollHeight: 0,
      obj: {}
    },
    // Skills
    {
      type: 'sticky',
      heightMultiple: 5,
      scrollHeight: 0,
      obj: {}
    },
    // History
    {
      type: 'sticky',
      heightMultiple: 5,
      scrollHeight: 0,
      obj: {}
    },
    // Projects
    {
      type: 'sticky',
      heightMultiple: 5,
      scrollHeight: 0,
      obj: {}
    },
  ]);

  useEffect(() => {
    console.log(about.current);
  }, [])

  return (
    <div>
      <div className={_s.container}>

        {/* mv */}
        <section className={_s.mv} />

        {/* 자기소개 */}
        <section ref={about}>
          <About />
        </section>

        {/* 기술 */}
        <section>
          <Skills />
        </section>

        {/* 교육(학원및 대학)과 경험, 자격증 */}
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