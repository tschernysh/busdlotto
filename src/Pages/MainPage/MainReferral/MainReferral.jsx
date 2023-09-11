import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"


export const MainReferral = () => {

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto after__block_line'>
      <h1 className='font-inter800 text-7xl mb-24 text-white'>
        Tell your friends & <span>earn extra!</span>
      </h1>
      <div className='fade__block_right font-poppins400 text-5xl text-white p-10'>
        <h3 className='mb-8'>Introducing our fantastic 3-level <span className='text-gold'>referral program</span></h3>
        <p className='font-poppins600 text-3xl text-description mb-5'>
          <span className='text-gold'>1 friend</span> buys a ticket up to the 3rd line → <span className='text-gold'>1 USDT</span> goes to your wallet.
        </p>
        <p className='font-poppins600 text-3xl text-description'>
          Connect your wallet to receive your referral link and start sharing it.
        </p>
      </div>
      <div className='w-full text-center mt-10 mb-14'>
        <ConnectWallet />
      </div>
    </div>
  )
}
