import { Config } from "config"
import { useSelector } from "react-redux"
import { formatNumber } from "utils/formatNumber"
import Map1 from 'Assets/main/map1.png'
import Map2 from 'Assets/main/map2.png'
import Map3 from 'Assets/main/map3.png'
import { useEffect, useRef, useState } from "react"


export const MainWinning = () => {

  const { lastWinnings } = useSelector(state => state.applicationReducer)
  const mainWinningRef1 = useRef()
  const mainWinningRef2 = useRef()
  const mainWinningRef3 = useRef()
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleIntersection = (entries) => {
    console.log(entries)
    if (entries[0].isIntersecting) {
      setIsVisible1(true);
    }
    if (entries[1]?.isIntersecting) {
      setIsVisible2(true);
    }
    if (entries[2]?.isIntersecting) {
      setIsVisible3(true);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (mainWinningRef1.current) {
      observer.observe(mainWinningRef1.current);
    }
    if (mainWinningRef2.current) {
      observer.observe(mainWinningRef2.current);
    }
    if (mainWinningRef3.current) {
      observer.observe(mainWinningRef3.current);
    }


    return () => {
      if (mainWinningRef1.current) {
        observer.unobserve(mainWinningRef1.current);
      }
      if (mainWinningRef2.current) {
        observer.unobserve(mainWinningRef2.current);
      }
      if (mainWinningRef3.current) {
        observer.unobserve(mainWinningRef3.current);
      }
    };
  }, []);

  return (
    <div className={`max-w-screen-mmx mx-auto  after__block_line mt-20`}>
      <h1 className='text-4xl sm:text-7xl px-4 sm:px-0 font-inter800 text-white mb-8'>Winning wallets</h1>
      <p className='font-poppins400 text-description px-4 sm:px-0 text-3xl sm:text-4xl mb-16'>
        Yours can be here as well!
        Want to see if you have received your prize?
        Check the transactions <a href={
          `${Config().BSC_SCAN_URL.replace('/tx/', '/address/')}${Config().CHAIN_LOTTO_CONTRACT_ADDRESS}`
        } target='_blank' className='text-gold font-poppins600'>here.</a>
      </p>
      <div className='flex gap-x-8 items-center mb-16 w-full overflow-x-auto'>
        <div ref={mainWinningRef1} className={`flex flex-col relative ${isVisible1 ? 'block__visible_bot' : 'opacity-0'} gap-y-12 winning__block_border w-full sm:px-0 px-4 py-5`}>
          <img src={Map1} className='w-full h-full absolute top-0 left-0 filter brightness-20' />
          {lastWinnings.map(el => {
            return <WinningTile value={formatNumber(el.amount) + ' USDT'} />
          })}
        </div>
        <div ref={mainWinningRef2} className={`flex flex-col relative ${isVisible2 ? 'block__visible_bot' : 'opacity-0'} gap-y-12 winning__block_border w-full sm:px-0 px-4 py-5`}>
          <img src={Map2} className='w-full h-full absolute top-0 left-0 filter brightness-20' />
          {lastWinnings.map(el => {
            return <WinningTile value={new Date(el.time * 1000).toLocaleTimeString()} />
          })}
        </div>
        <div ref={mainWinningRef3} className={`flex flex-col relative ${isVisible3 ? 'block__visible_bot' : 'opacity-0'} gap-y-12 winning__block_border w-full sm:px-0 px-4 py-5`}>
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
