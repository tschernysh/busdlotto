import { WorkLore } from "./WorkLore/WorkLore"
import { WorkMath } from "./WorkMath/WorkMath"
import { WorkTitle } from "./WorkTitle/WorkTitle"


export const WorkPage = () => {

  return (
    <div className=''>
      <WorkTitle />
      <WorkLore />
      <WorkMath />
    </div>
  )
}
