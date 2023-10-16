import { Config } from "config"
import { useEffect, useRef, useState } from "react";

export const WorkMath = () => {


  const workMathRef = useRef()
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
    if (workMathRef.current) {
      observer.observe(workMathRef.current);
    }

    return () => {
      if (workMathRef.current) {
        observer.unobserve(workMathRef.current);
      }
    };
  }, []);

  return (
    <div ref={workMathRef} className={`mt-20 max-w-screen-mmx mx-auto ${isVisible && 'block__visible_right'} `}>
      <h1 className='font-inter800 text-5xl sm:text-7xl px-4 mb-10 text-white'>
        Simple Math
      </h1>
      <div className='fade__block_right p-10'>
        <h3 className='font-poppins400 text-title text-3xl sm:text-5xl mb-8'>For every <span className='text-gold font-poppins600'>10 USDT</span> lottery ticket purchased, the amount is allocated as follows:</h3>
        <p className='text-description font-poppins400 text-2xl sm:text-3xl mb-5'>
          <span className='text-gold font-poppins600'>6 USDT</span> goes to the lottery fund (you can check the lottery fund wallet <a href={`${Config().BSC_SCAN_URL.replace('/tx/', '/address/')}${Config().CHAIN_LOTTO_CONTRACT_ADDRESS}`} className='text-gold font-poppins600 no-underline' target='_blank' >here</a>).
        </p>
        <p className='text-description font-poppins400 text-2xl sm:text-3xl mb-5'>
          <span className='text-gold font-poppins600'>3 USDT</span> is your referral commissions for 3 levels (<span className='text-gold font-poppins600'>1 USDT</span> for each level).
        </p>
        <p className='text-description font-poppins400 text-2xl sm:text-3xl'>
          <span className='text-gold font-poppins600'>1 USDT</span> goes to us, allowing us to keep things in order.
        </p>
      </div>
    </div>
  )
}
