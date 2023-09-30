import { ToastifyContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Config } from "config"
import { useContext, useMemo } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const ReferralTitle = () => {

  const baseUrl = Config().BASE_URL;
  const { upline } = useSelector(store => store.accountReducer)
  const { defaultReferrer, walletAddress } = useSelector(store => store.applicationReducer)
  const { setToastifyData } = useContext(ToastifyContext)

  const referrer = upline || localStorage.getItem('refAddress') || defaultReferrer

  const referralUrl = useMemo(() => {
    return `${baseUrl}${walletAddress}`
  }, [walletAddress, upline])

  const copyReferralUrlToClipboard = () => {
    console.log(upline)
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
  }

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line'>
      <h1 className='font-inter800 w-1/2 text-c text-title  flex flex-col '>
        <span className='leading-[1.1em] block mt-14'>Referral</span>
        <span className='leading-[1.1em] '>Program</span>
      </h1>
      <p className='my-14 font-poppins400 text-4xl text-description w-1/2'>
        To participate, simply connect your wallet, get your unique ID number, referral link, and start inviting others to join and earn.
      </p>
      <div className=' flex items-center mb-16'>
        <Button onClick={copyReferralUrlToClipboard}>View Referral Link</Button>
      </div>
    </div>
  )
}
