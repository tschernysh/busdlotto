import { ToastifyContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Config } from "config"
import { useContext, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ReactComponent as Copy } from 'Assets/copy.svg'


export const ReferralTitle = () => {

  const baseUrl = Config().BASE_URL;
  const { upline } = useSelector(store => store.accountReducer)
  const { defaultReferrer, walletAddress } = useSelector(store => store.applicationReducer)
  const { setToastifyData } = useContext(ToastifyContext)
  const [showLink, setShowLink] = useState(false)

  const referrer = upline || localStorage.getItem('refAddress') || defaultReferrer

  const isMobile = window.innerWidth < 640

  const referralUrl = useMemo(() => {
    return `${baseUrl}${walletAddress}`
  }, [walletAddress, upline])

  const copyReferralUrlToClipboard = () => {

    if (showLink) {
      if (!upline) {
        setToastifyData({
          text: 'You need to make first deposit to invite referrals!',
          description: 'Error'
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

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line px-4 sm:px-0 pt-48 sm:pt-0'>
      <h1 className='font-inter800 w-full sm:w-1/2 text-5xl sm:text-c text-title flex flex-col '>
        <span className='leading-[1.1em] block mt-14'>Referral</span>
        <span className='leading-[1.1em] '>Program</span>
      </h1>
      <p className='my-14 font-poppins400 text-4xl text-description w-full sm:w-1/2'>
        To participate, simply connect your wallet, get your unique ID number, referral link, and start inviting others to <span className='text-gold font-poppins600'>join and earn</span>.
      </p>
      <div className='flex items-center mb-16 h-full gap-x-4'>
        <Button className='' disabled={showLink} onClick={() => !showLink && setShowLink(true)}>{showLink ? `${isMobile ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}` : walletAddress}` : 'View Referral Link'}</Button>
        {
          showLink && <div onClick={copyReferralUrlToClipboard} className='bg-gold cursor-pointer h-full rounded-xl p-4 sm:p-5'>
            <Copy className='sm:w-8 sm:h-8 w-4 h-4' />
          </div>
        }
      </div>
    </div>
  )
}
