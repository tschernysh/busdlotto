import { MainChance } from "./MainChance/MainChance"
import { MainFaq } from "./MainFaq/MainFaq"
import { MainReferral } from "./MainReferral/MainReferral"
import { MainTitle } from "./MainTitle/MainTitle"
import { MainWhy } from "./MainWhy/MainWhy"
import { MainWinning } from "./MainWinning/MainWinning"

export const MainPage = () => {

  return (
    <div className='main__background '>
      <MainTitle />
      <MainReferral />
      <MainWinning />
      <MainChance />
      <MainWhy />
      <MainFaq />
    </div>
  )
}
