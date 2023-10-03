import { ResultsTitle } from "./ResultsTitle/ResultsTitle"
import { ResultsBlock } from "./ResutlsBlock/ResultsBlock"
import Serpantin from 'Assets/results/serpantin.png'
import LightsLeft from 'Assets/results/lightsLeft.png'
import LightsRight from 'Assets/results/lightsRight.png'
import Coins from 'Assets/results/coins.png'


export const ResultsPage = () => {

  return (
    <div className='relative'>
      <img className='w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Serpantin} />
      <img className='w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Coins} />
      <img className='w-full h-full absolute left-0 top-0' src={LightsLeft} />
      <img className='w-full h-full absolute right-0 top-0' src={LightsRight} />
      <ResultsTitle />
      <ResultsBlock />
    </div>
  )
} 
