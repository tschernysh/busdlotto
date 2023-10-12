import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Link } from "react-router-dom"


export const MainReferral = () => {

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto  after__block_line'>
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
        <Link to='referral' className='w-full button__focus whitespace-nowrap sm:w-min text-center font-inter600 text-title text-base sm:text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-2 sm:px-24'>view your referral link</Link>
      </div>
    </div>
  )
}
