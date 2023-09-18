import { WorkLore } from "./WorkLore/WorkLore"
import { WorkMath } from "./WorkMath/WorkMath"
import { WorkTitle } from "./WorkTitle/WorkTitle"


export const WorkPage = () => {

  return (
    <div className='work__background'>
      <WorkTitle />
      <WorkLore />
      <WorkMath />
    </div>
  )
}
