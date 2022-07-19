import { useEffect } from 'react'
import _s from '../styles/About.module.css'

export default function About(props: any) {
  
  useEffect(() => {
    // console.log(Number.parseInt(props.scrollY))
  })

  return (
    <div className={_s.about__wrapper}>
      <h2>🖐 웹 서비스로 가치와 감동을 전달하고 싶은 개발자, 윤희철입니다!</h2>
      <p>
        시각디자인을 전공하며, 서비스의 UI, UX에 관심을 가지게 되었고 학부생 때 게임 제작 동아리 활동을 하면서 개발자들과 협업할 일이 많았습니다. 서비스를 구현하는 개발자의 역할에 매력을 느껴서 최근까지 웹 퍼블리셔로 일하다가 개발자가 되기 위해 자바 웹 개발자 양성 과정을 6개월간 이수하고 신입 개발자로 구직 중 입니다.<br /><br />
        💬 의사소통의 시작은 듣는 것부터 시작한다고 생각합니다.<br />먼저 다른 사람의 의견을 듣고 제 의견을 적극적으로 표현하고자 합니다.<br />
        <br />👀 어제보다 발전하는 것이 중요하다고 생각하며 자기개발에 관심이 많습니다.<br />꾸준히 성장하는 사람이 되고 싶습니다.
      </p>      

      <hr />
      <h2>💪 Next</h2>
      <p>
        T자형 개발자.<br /> 
        문제해결에 능한 개발자가 되자.
      </p>
    </div>
  )
}