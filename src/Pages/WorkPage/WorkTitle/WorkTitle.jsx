import Arrow from 'Assets/work/arrow.png'
import Finger from 'Assets/work/finger.png'
import Hand from 'Assets/work/hand.png'
import Wallet from 'Assets/work/wallet.png'
import Star from 'Assets/work/star.png'
import { Button } from 'Components/Button/Button'
import { useContext, useEffect, useRef, useState } from 'react'
import { ConfigContext } from 'applicationContext'

export const WorkTitle = () => {

  const { setBuyModalShow } = useContext(ConfigContext)


  const workTitleRef = useRef()
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
    if (workTitleRef.current) {
      observer.observe(workTitleRef.current);
    }

    return () => {
      if (workTitleRef.current) {
        observer.unobserve(workTitleRef.current);
      }
    };
  }, []);


  return (
    <div ref={workTitleRef} className={`mt-20 max-w-screen-mmx mx-auto ${isVisible && 'block__visible_right'} `}>
      <h1 className='font-inter800 text-5xl px-4 sm:px-0 sm:text-7xl mb-10 text-white'>
        How it works
      </h1>
      <div className='font-poppins400 text-description text-3xl p-10 mb-16 fade__block_right'>
        CHAINLOTTO is a cryptocurrency lottery with a 3-level referral program on the Polygon Network.
        A smart contract ensures adherence to the rules and instills trust among participants.
        As more people join the lottery, your chances of winning increase.
      </div>
      <div className='flex items-center sm:flex-row flex-col justify-between gap-y-16 gap-x-12 mb-10 sm:mb-24'>
        <div className='w-full sm:w-1/5 self-start'>
          <div className='w-44 h-44 work__circles mx-auto flex items-center justify-center'>
            <img src={Finger} />
          </div>
          <p className='font-poppins400 text-white text-xl text-center w-10/12 mx-auto mt-4' >Press “BUY TICKET”</p>
        </div>
        <img className='self-center sm:self-baseline transform rotate-90 sm:rotate-0 mt-0 sm:mt-24' src={Arrow} />
        <div className='w-full sm:w-1/5 self-start'>
          <div className='w-44 h-44 work__circles mx-auto flex items-center justify-center'>
            <img src={Wallet} />
          </div>
          <p className='font-poppins400 text-white text-xl text-center w-10/12 mx-auto mt-4' >Connect your wallet</p>
        </div>
        <img className='self-center sm:self-baseline transform rotate-90 sm:rotate-0 mt-0 sm:mt-24' src={Arrow} />
        <div className='w-full sm:w-1/5 self-start'>
          <div className='w-44 h-44 work__circles mx-auto flex items-center justify-center'>
            <img src={Hand} />
          </div>
          <p className='font-poppins400 text-white text-xl text-center w-10/12 mx-auto mt-4' >Pay with your preferred cryptocurrency</p>
        </div>
        <img className='self-center sm:self-baseline transform rotate-90 sm:rotate-0 mt-0 sm:mt-24' src={Arrow} />
        <div className='w-full sm:w-1/5 self-start'>
          <div className='w-44 h-44 work__circles mx-auto flex items-center justify-center'>
            <img src={Star} />
          </div>
          <p className='font-poppins400 text-white text-xl text-center w-10/12 mx-auto mt-4' >GET READY TO WIN!!!</p>
        </div>
      </div>
      <div className='mx-auto w-full text-center px-4 sm:px-0'>
        <Button onClick={() => setBuyModalShow(true)} >BUY TICKET</Button>
      </div>
    </div>
  )
}
