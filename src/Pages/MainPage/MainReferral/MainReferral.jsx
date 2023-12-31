import { Button } from "Components/Button/Button"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export const MainReferral = () => {
  const navigate = useNavigate()
  const mainReferralRef = useRef()
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const options = useMemo(() => ({
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  }), [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (mainReferralRef.current) {
      observer.observe(mainReferralRef.current);
    }

    return () => {
      if (mainReferralRef.current) {
        observer.unobserve(mainReferralRef.current);
      }
    };
  }, []);

  const Content = useMemo(() => {
    return (
      <div ref={mainReferralRef} className={`mt-20 mmx:px-0 sm:px-24 max-w-screen-mmx mx-auto after__block_line ${isVisible ? 'block__visible_right' : 'opacity-0'}`}>
        <h1 className='font-inter800 text-5xl sm:text-7xl sm:px-0 px-4 mb-8 sm:mb-24 text-white'>
          Tell your friends & <span className='text-gold font-poppins600'>earn extra!</span>
        </h1>
        <div className='fade__block_right font-poppins400 text-3xl sm:text-5xl text-white p-10'>
          <h3 className='mb-8'>Introducing our fantastic 3-level <Link to='/referral' className='text-gold font-poppins600'>referral program</Link></h3>
          <p className='font-poppins600 text-2xl sm:text-3xl text-description mb-5'>
            <span className='text-gold font-poppins600'>1 friend</span> buys a ticket up to the 3rd line → <span className='text-gold font-poppins600'>1 USDT</span> goes to your wallet.
          </p>
          <p className='font-poppins600 text-2xl sm:text-3xl text-description'>
            Buy at least one ticket, receive your referral link and start sharing it
          </p>
        </div>
        <div className='w-full text-center mt-10 mb-14'>
          <Button onClick={() => navigate('referral')}>view your referral link</Button>
        </div>
      </div>
    )
  }, [isVisible, navigate])

  return Content

}
