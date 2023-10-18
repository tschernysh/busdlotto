import { ConfigContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { useContext, useEffect, useRef, useState } from "react"


export const WorkLore = () => {

  const { setBuyModalShow } = useContext(ConfigContext)

  const isMobile = window.innerWidth < 640

  const workLoreRef = useRef()
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
    if (workLoreRef.current) {
      observer.observe(workLoreRef.current);
    }

    return () => {
      if (workLoreRef.current) {
        observer.unobserve(workLoreRef.current);
      }
    };
  }, []);

  return isMobile
    ? (
      <div ref={workLoreRef} className={`mt-20 max-w-screen-mmx mx-auto block__visible_left`}>
        <div className='fade__block_right p-10 flex flex-col gap-y-8 mb-10'>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 20 tickets have been bought, <span className='text-gold font-poppins600'>40 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 100 tickets have been bought, <span className='text-gold font-poppins600'>100 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 1000 tickets have been bought, <span className='text-gold font-poppins600'>1000 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 10000 tickets have been bought, <span className='text-gold font-poppins600'>10000 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 100000 tickets have been bought, <span className='text-gold font-poppins600'>100000 USDT</span> are drawn.</p>
        </div>
        <div className='fade__block_right p-10 flex flex-col gap-y-8 mb-10'>
          <p className='font-poppins600 sm:text-3xl text-2xl text-description mb-2'>Simply Amazing</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>With just one lottery ticket, you can participate in draws for
            <span className='text-gold font-poppins600'> 40 USDT, 100 USDT, 1 000 USDT, 10 000 USDT </span>, and even <span className='text-gold font-poppins600'>100 000 USDT</span>.
            Isn't this better than a dream? And the more tickets you have,
            the higher your chances of winning. It's even possible to win multiple prizes!</p>
          <p className='font-poppins400 text-xl text-description'>To claim your winnings, simply connect your wallet,
            click on the "Check Your Results" section, and press the
            "Get your reward now!" button.
            Please note that a small gas fee in BNB is required for the transaction.</p>
        </div>
        <div className='text-center w-full px-4 sm:px-0'>
          <Button onClick={() => setBuyModalShow(true)} >BUY TICKET</Button>
        </div>
      </div >
    )
    : (
      <div ref={workLoreRef} className={`mt-20 mmx:px-0 sm:px-24 max-w-screen-mmx mx-auto ${isVisible ? 'block__visible_left' : 'opacity-0'} `}>
        <div className='fade__block_right p-10 flex flex-col gap-y-8 mb-10'>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 20 tickets have been bought, <span className='text-gold font-poppins600'>40 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 100 tickets have been bought, <span className='text-gold font-poppins600'>100 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 1000 tickets have been bought, <span className='text-gold font-poppins600'>1000 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 10000 tickets have been bought, <span className='text-gold font-poppins600'>10000 USDT</span> are drawn.</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>Once 100000 tickets have been bought, <span className='text-gold font-poppins600'>100000 USDT</span> are drawn.</p>
          <p className='font-poppins600 sm:text-3xl text-2xl text-description mb-2'>Simply Amazing</p>
          <p className='text-description font-poppins400 sm:text-3xl text-2xl'>With just one lottery ticket, you can participate in draws for
            <span className='text-gold font-poppins600'> 40 USDT, 100 USDT, 1 000 USDT, 10 000 USDT </span>, and even <span className='text-gold font-poppins600'>100 000 USDT</span>.
            Isn't this better than a dream? And the more tickets you have,
            the higher your chances of winning. It's even possible to win multiple prizes!</p>
          <p className='font-poppins400 text-xl text-description'>To claim your winnings, simply connect your wallet,
            click on the "Check Your Results" section, and press the
            "Get your reward now!" button.
            Please note that a small gas fee in BNB is required for the transaction.</p>
        </div>
        <div className='text-center w-full px-4 sm:px-0'>
          <Button onClick={() => setBuyModalShow(true)} >BUY TICKET</Button>
        </div>
      </div>
    )
}
