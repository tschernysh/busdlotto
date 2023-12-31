import { ToastifyContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Config } from "config"
import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ReactComponent as Copy } from 'Assets/copy.svg'


export const ReferralTitle = () => {

  const baseUrl = Config().BASE_URL;
  const { upline } = useSelector(store => store.accountReducer)
  const { defaultReferrer, walletAddress, notCorrectChain } = useSelector(store => store.applicationReducer)
  const { setToastifyData } = useContext(ToastifyContext)
  const [showLink, setShowLink] = useState(false)

  const referralTitleRef = useRef()
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
    if (referralTitleRef.current) {
      observer.observe(referralTitleRef.current);
    }

    return () => {
      if (referralTitleRef.current) {
        observer.unobserve(referralTitleRef.current);
      }
    };
  }, []);


  const referrer = upline || localStorage.getItem('refAddress') || defaultReferrer

  const isMobile = window.innerWidth < 640

  const referralUrl = useMemo(() => {
    return `${baseUrl}${walletAddress}`
  }, [walletAddress, upline])

  const copyReferralUrlToClipboard = () => {
    console.log(upline)
    if (!upline) {
      setToastifyData({
        text: 'Referral is available only after at least 1 ticket has been bought.',
      })
    } else {
      if (showLink) {
        if (notCorrectChain) {
          setToastifyData({
            text: <>Change your network to the {Config().CHAIN_ID === 137 ? 'Polygon Network' : 'Mumbai'}</>,
            description: <>Incorrect network!</>
          })
        } else {

          console.log(referralUrl)
          navigator.clipboard.writeText(referralUrl)

          setToastifyData({
            text: 'The referral link has been copied!',
            description: 'Success'
          })
        }

      } else {
        setShowLink(true)
      }
    }
  }

  return (
    <div ref={referralTitleRef} className={`max-w-screen-mmx mx-auto ${isVisible ? 'block__visible_left' : 'opacity-0'} px-4 mmx:px-0 sm:px-24 pt-48 sm:pt-0`}>
      <h1 className='font-inter800 w-full sm:w-1/2 text-5xl sm:text-c text-title flex flex-col '>
        <span className='leading-[1.1em] block mt-14'>Referral</span>
        <span className='leading-[1.1em] '>Program</span>
      </h1>
      <p className='my-14 font-poppins400 text-4xl text-description w-full sm:w-1/2'>
        To participate, simply buy your first ticket, connect your wallet, get your unique ID number - referral link, and start inviting others to <span className='text-gold font-poppins600'>join and earn</span>.
      </p>
      <div className='flex items-center mb-16 h-full gap-x-4'>
        <Button className='' disabled={showLink} onClick={copyReferralUrlToClipboard}>{showLink ? `${isMobile ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}` : walletAddress}` : 'View Referral Link'}</Button>
        {
          showLink && <div onClick={copyReferralUrlToClipboard} className='bg-gold cursor-pointer button__focus h-full rounded-xl p-4 sm:p-5'>
            <Copy className='sm:w-8 sm:h-8 w-4 h-4' />
          </div>
        }
      </div>
    </div>
  )
}
