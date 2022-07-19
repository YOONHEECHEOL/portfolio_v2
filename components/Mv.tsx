import { useEffect, useState } from "react"

export default function Mv(props:any) {
  let [yOff, setYOff] = useState(0);

  useEffect(() => {
    setYOff(props.scrollY);
    console.log(yOff);
  })

  return (
    <div>

    </div>
  )
}