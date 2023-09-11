import { MainChance } from "./MainChance/MainChance"
import { MainReferral } from "./MainReferral/MainReferral"
import { MainTitle } from "./MainTitle/MainTitle"
import { MainWinning } from "./MainWinning/MainWinning"

export const MainPage = () => {

  return (
    <div className='main__background '>
      <MainTitle />
      <MainReferral />
      <MainWinning />
      <MainChance />
    </div>
  )
}
