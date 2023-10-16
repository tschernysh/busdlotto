
import Anonymous from 'Assets/why/anonymous.png'
import HundredK from 'Assets/why/100k.png'
import Chain from 'Assets/why/chain.png'
import Coins from 'Assets/why/coins.png'
import Cup from 'Assets/why/cup.png'
import Megaphone from 'Assets/why/megaphone.png'
import { useEffect, useRef, useState } from 'react'

export const MainWhy = () => {

  const mainWhyRef = useRef()
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
    if (mainWhyRef.current) {
      observer.observe(mainWhyRef.current);
    }

    return () => {
      if (mainWhyRef.current) {
        observer.unobserve(mainWhyRef.current);
      }
    };
  }, []);


  return (
    <div ref={mainWhyRef} className={` mt-20 max-w-screen-mmx mx-auto ${isVisible && 'block__visible_left'} after__block_line`}>
      <h1 className='font-inter800 text-5xl sm:text-7xl mb-10 sm:mb-24 px-4 sm:px-0 text-white'>
        Why to play <span className='font-poppins600 text-gold'>CHAINLOTTO?</span>
      </h1>
      <div className='flex flex-col gap-y-10 sm:gap-y-36 mb-16'>

        <div className='fade__block_right sm:overflow-visible overflow-hidden relative font-poppins400 text-5xl text-white  px-4 py-8 sm:py-10 sm:px-10 z-10'>
          <div className=' w-full sm:w-8/12'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>Anonymous</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              <span className='font-poppins600'>CHAINLOTTO</span> winners remain anonymous.<span className='text-gold font-poppins600'> No sign-up or registration </span> is required. You will only need to connect your wallet.
            </p>
          </div>
          <img className='absolute right-0 bottom-0 sm:opacity-100 opacity-20  ' src={Anonymous} />
        </div>

        <div className='fade__block_left overflow-hidden sm:overflow-visible flex justify-end relative font-poppins400 text-5xl text-white  px-4 py-8 sm:py-10 sm:px-10 z-10'>
          <img className='absolute left-0 bottom-0 sm:opacity-100 opacity-20' src={Chain} />
          <div className=' w-full sm:w-8/12 text-left sm:text-right'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>Transparent</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              The <span className='font-poppins600 text-gold'>Polygon smart contract</span> is public, allowing anyone to view the source code,
              payments, prize payouts and all transactions on Polygon Scan.
            </p>
          </div>
        </div>

        <div className='fade__block_right sm:overflow-visible overflow-hidden relative font-poppins400 text-5xl text-white  px-4 py-8 sm:py-10 sm:px-10 z-10'>
          <div className=' w-full sm:w-8/12'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>100K win</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              Great opportunity to win up to <span className='font-poppins600 text-gold'>100K USDT</span>.
              Each ticket participates in 5 draws -<span className='font-poppins600 text-gold'> 40 USDT, 100 USDT,
                1 000 USDT, 10 000 USDT</span> and<span className='font-poppins600 text-gold'> 100 000 USDT </span>draw.
            </p>
          </div>
          <img className='absolute right-0 bottom-0 sm:opacity-100 opacity-20  ' src={HundredK} />
        </div>

        <div className='fade__block_left flex justify-end relative font-poppins400 text-5xl text-white  px-4 py-8  sm:px-10 sm:py-10 z-10'>
          <img className='absolute left-0 bottom-0  sm:opacity-100 opacity-20' src={Coins} />
          <div className=' w-full sm:w-8/12 text-left sm:text-right'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>Crosschain capability</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              Enjoy the convenience of purchasing lottery tickets with <span className='font-poppins600 text-gold'>any cryptocurrency of your choice</span>.
              Our platform seamlessly converts your chosen cryptocurrency into USDT on
              the Polygon network. Each lottery ticket requires a minimum of 10 USD.
            </p>
          </div>
        </div>

        <div className='fade__block_right sm:overflow-visible overflow-hidden relative font-poppins400 text-5xl text-white  px-4 py-8 sm:py-10 sm:px-10 z-10'>
          <div className=' w-full sm:w-8/12'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>60% goes to the prize pool</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              <span className='font-poppins600'>CHAINLOTTO</span> allocates <span className='font-poppins600 text-gold'>60% of the income to the prize pool</span>,
              which exceeds the usual allocation of other lotteries.
              Additionally, <span className='font-poppins600 text-gold'>30% is allocated to referral bonuses</span>, allowing you to earn a share as well.
            </p>
          </div>
          <img className='absolute right-0 bottom-0 sm:opacity-100 opacity-20  ' src={Cup} />
        </div>

        <div className='fade__block_left sm:overflow-visible overflow-hidden flex justify-end relative font-poppins400 text-5xl text-white  px-4 py-8 sm:py-10 sm:px-10 z-10'>
          <img className='absolute left-0 bottom-0  sm:opacity-100 opacity-20' src={Megaphone} />
          <div className=' w-full sm:w-8/12 text-left sm:text-right'>
            <h3 className='mb-8 font-inter800 text-3xl sm:text-5xl  text-title'>3-level referral program</h3>
            <p className='font-poppins400 text-2xl sm:text-3xl text-description mb-5'>
              <span className='font-poppins600 text-gold'>Invite your friends</span> to join CHAINLOTTO,
              and receive <span className='font-poppins600 text-gold'>1 USDT</span> of their ticket price up to the 3rd line.
              A nice passive income!
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
