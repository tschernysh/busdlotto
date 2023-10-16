import Crown from 'Assets/results/crown.png'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export const ResultsTitle = () => {

  const { walletAddress } = useSelector(state => state.applicationReducer)

  const walletToShow = walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : 'Connect wallet first'

  const resultsTitleRef = useRef()
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
    if (resultsTitleRef.current) {
      observer.observe(resultsTitleRef.current);
    }

    return () => {
      if (resultsTitleRef.current) {
        observer.unobserve(resultsTitleRef.current);
      }
    };
  }, []);

  return (
    <div ref={resultsTitleRef} className={`pt-20 max-w-screen-mmx mx-auto text-center ${isVisible && 'block__visible_right'} z-10 relative`}>
      <h1 className='font-inter800 text-5xl sm:text-7xl mb-24 text-white w-full sm:5/12 mx-auto'>
        Check your results
      </h1>
      <div className='w-full px-4 sm:px-0 sm:w-1/2 mx-auto text-center'>
        <img className='mx-auto' src={Crown} />
        <div className='font-poppins400 rounded-2xl text-xl sm:text-3xl text-description py-5 px-4 sm:py-8 sm:px-10 bg-blue'>Your wallet address: <span className='text-gold font-poppins600'>{walletToShow}</span></div>
      </div>
    </div>
  )
}
