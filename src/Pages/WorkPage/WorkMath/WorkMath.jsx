import { Config } from "config"

export const WorkMath = () => {

  const fundWalletLink = Config().CHAIN_LOTTO_CONTRACT + Config().CHAIN_LOTTO_CONTRACT_ADDRESS

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <h1 className='font-inter800 text-7xl mb-10 text-white'>
        Simple Math
      </h1>
      <div className='fade__block_right p-10'>
        <h3 className='font-poppins400 text-title text-5xl mb-8'>For every <span className='text-gold'>10 USDT</span> lottery ticket purchased, the amount is allocated as follows:</h3>
        <p className='text-description font-poppins400 text-3xl mb-5'>
          <span className='text-gold'>6 USDT</span> goes to the lottery fund (you can check the lottery fund wallet <a href={fundWalletLink} className='text-gold no-underline' target='_blank' >here</a>).
        </p>
        <p className='text-description font-poppins400 text-3xl mb-5'>
          <span className='text-gold'>3 USDT</span> is your referral commissions for 3 levels (<span className='text-gold'>1 USDT</span> for each level).
        </p>
        <p className='text-description font-poppins400 text-3xl'>
          <span className='text-gold'>1 USDT</span> goes to us, allowing us to keep things in order.
        </p>
      </div>
    </div>
  )
}
