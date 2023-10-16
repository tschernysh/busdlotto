import { Config } from "config"
import { useSelector } from "react-redux"
import { formatNumber } from "utils/formatNumber"
import Map1 from 'Assets/main/map1.png'
import Map2 from 'Assets/main/map2.png'
import Map3 from 'Assets/main/map3.png'
import { useEffect, useRef, useState } from "react"


export const MainWinning = () => {

  const { lastWinnings } = useSelector(state => state.applicationReducer)
  const mainWinningRef = useRef()
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (mainWinningRef.current) {
      observer.observe(mainWinningRef.current);
    }

    return () => {
      if (mainWinningRef.current) {
        observer.unobserve(mainWinningRef.current);
      }
    };
  }, []);

  return (
    <div ref={mainWinningRef} className={`max-w-screen-mmx mx-auto ${isVisible && 'block__visible_left'} after__block_line mt-20`}>
      <h1 className='text-4xl sm:text-7xl px-4 sm:px-0 font-inter800 text-white mb-8'>Winning wallets</h1>
      <p className='font-poppins400 text-description px-4 sm:px-0 text-3xl sm:text-4xl mb-16'>
        Yours can be here as well!
        Want to see if you have received your prize?
        Check the transactions <a href={
          `${Config().BSC_SCAN_URL.replace('/tx/', '/address/')}${Config().CHAIN_LOTTO_CONTRACT_ADDRESS}#events`
        } target='_blank' className='text-gold font-poppins600'>here.</a>
      </p>
      <div className='flex gap-x-8 items-center mb-16 w-full overflow-x-auto'>
        <div className='flex flex-col relative gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          <img src={Map1} className='w-full h-full absolute top-0 left-0 filter brightness-20' />
          {lastWinnings.map(el => {
            return <WinningTile value={formatNumber(el.amount) + ' USDT'} />
          })}
        </div>
        <div className='flex flex-col relative gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          <img src={Map2} className='w-full h-full absolute top-0 left-0 filter brightness-20' />
          {lastWinnings.map(el => {
            return <WinningTile value={new Date(el.time * 1000).toLocaleTimeString()} />
          })}
        </div>
        <div className='flex flex-col relative gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          <img src={Map3} className='w-full h-full absolute top-0 left-0 filter brightness-20' />
          {lastWinnings.map(el => {
            return <WinningTile value={el.wallet.slice(0, 4) + '...' + el.wallet.slice(-4)} />
          })}
        </div>
      </div>
    </div >
  )
}

const WinningTile = (props) => {
  return (
    <div className='text-white text-4xl font-inter800 winning__block_line whitespace-nowrap z-10 text-center '>
      {props.value}
    </div>
  )
}
