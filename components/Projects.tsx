import { ReactNode, useState } from "react";
import _s from '../styles/Projects.module.css';
import data from '../public/data';

const Projects = ({ ...props }:any) => {  

  // const content = data;

  let [content, setContent] = useState(props.prj.projects.projects);

  // console.log(content);

  return (
    <div>
      <h1>Projects!</h1>
      <div>projects</div>
      {content.map((item:any, idx:string) => {
        return(<Box {...{item, idx}} key={idx} />)
      })}
    </div>
  )
}

export default Projects;

const Box = ({...props}) => {
  let [prj, setPrj] = useState(props.item);

  // console.log(prj)

  return (
    <>
      <div>{prj.title}</div>
      {prj.desc.map((item:any, idx:string) => {
        return (<BoxInfo {...{ item, idx }} key={idx} />)
      })}
    </>
  )
}

const BoxInfo = ({...props}) => {
  let [desc, setDesc] = useState(props)

  console.log(desc);

  return (
    <div>{desc.item}</div>
  )
}