import { Button } from "Components/Button/Button"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Link } from "react-router-dom"


export const ReferralTitle = () => {

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
        <ConnectWallet />
      </div>
    </div>
  )
}
