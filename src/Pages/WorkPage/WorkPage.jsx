import { useEffect } from "react"
import { WorkLore } from "./WorkLore/WorkLore"
import { WorkMath } from "./WorkMath/WorkMath"
import { WorkTitle } from "./WorkTitle/WorkTitle"


export const WorkPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='work__background'>
      <WorkTitle />
      <WorkLore />
      <WorkMath />
    </div>
  )
}
