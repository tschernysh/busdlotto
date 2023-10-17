import { ResultsTitle } from "./ResultsTitle/ResultsTitle"
import { ResultsBlock } from "./ResutlsBlock/ResultsBlock"
import Serpantin from 'Assets/results/serpantin.png'
import MobileBg from 'Assets/results/mobileBg.png'
import LightsLeft from 'Assets/results/lightsLeft.png'
import LightsRight from 'Assets/results/lightsRight.png'
import Coins from 'Assets/results/coins.png'
import { useEffect } from "react"


export const ResultsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isMobile = window.innerWidth < 640

  return (
    <div className='relative'>
      {
        !isMobile
          ? <>
            <img className={`w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`} src={Serpantin} />
            <img className='w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Coins} />
          </>
          : <>
            <img className='w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={MobileBg} />
          </>
      }
      <img className='w-full h-full absolute left-0 top-0' src={LightsLeft} />
      <img className='w-full h-full absolute right-0 top-0' src={LightsRight} />
      <ResultsTitle />
      <ResultsBlock />
    </div>
  )
} 
