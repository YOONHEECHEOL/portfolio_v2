import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import About from '../components/About'
import FooterInfo from '../components/FooterInfo'
import History from '../components/History'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Mv from '../components/Mv'
import _s from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  let [prj, setPrj] = useState(props);

  // 각 section 불러오기
  const aboutSection = useRef(null);
  const skillSection = useRef(null);
  const historySection = useRef(null);
  const projectSection = useRef(null);
  const footerSection = useRef(null);
  const mv = useRef(null);

  // section group
  const allSection:Array<any> = [
    aboutSection,
    skillSection,
    historySection,
    projectSection
  ]

  // YOffset
  let [yOff, setYOff] = useState(0);

  // layout data
  let [act, setAct] = useState([
    // mv
    {
      type: 'sticky',
      heightMultiple: 2,
      scrollHeight: 0,
      obj: {}
    },
    // About
    {
      type: 'sticky',
      heightMultiple: 2,
      scrollHeight: 0,
      obj: {}
    },
    // Skills
    {
      type: 'sticky',
      heightMultiple: 2,
      scrollHeight: 0,
      obj: {}
    },
    // History
    {
      type: 'sticky',
      heightMultiple: 2,
      scrollHeight: 0,
      obj: {}
    },
    // Projects
    {
      type: 'sticky',
      heightMultiple: 2,
      scrollHeight: 0,
      obj: {}
    },
  ]);

  useEffect(() => {
        
    setYOffset();   
    setLayout();
    
  })

  // YOffset 값 받아오기
  const setYOffset = () => {
    window.addEventListener('scroll', () => {
      setYOff(window.scrollY);
      // console.log(yOff);      
    })
  }

  // layout 만들기
  const setLayout = () => {
    allSection.forEach((sec, idx) => {
      sec.current.style.height = `${act[idx].heightMultiple * 95}vh`;
      // console.log(sec.current.)
    })
    // console.log(act[0].heightMultiple)
  }

  return (
    <div>
    
      {/* mv */}
      <Mv scrollY={yOff} />

      <div className={_s.container}>

        {/* 자기소개 */}
        <section ref={aboutSection}>
          <About scrollY={yOff} />
        </section>

        {/* 기술 */}
        <section ref={skillSection}>
          <Skills />
        </section>

        {/* 교육(학원및 대학)과 경험, 자격증 */}
        <section ref={historySection}>
          <History />
        </section>

        {/* 프로젝트 경험 */}
        <section ref={projectSection}>
          <Projects {...{ prj }} />
        </section>

        <section ref={footerSection}>
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