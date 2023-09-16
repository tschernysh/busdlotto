

export const ReferralBenefits = () => {
  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <div>
        <h1 className='font-inter800 text-7xl mb-24 text-white'>
          Experience the benefits
        </h1>
        <p>
          As a valued participant of CHAINLOTTO, we have exciting rewards waiting for you.
          By referring others to join the lottery, you can earn referral commissions and
          maximize your chances of winning.
        </p>
      </div>
      <div className='flex flex-col gap-y-10'>
        <div className='fade__block_right relative py-16 pl-32 pr-10 w-1/2'>
          <div className='absolute left-0 top-1/2 
            font-poppins600 text-5xl text-gold
            work__circles w-44 h-44 flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 1</div>
          <p className='font-poppins400 text-description text-3xl'>
            For each person who registers directly using your referral link,
            you will earn 1 USDT for each lottery ticket they purchase.
          </p>
        </div>
        <div className='fade__block_right self-end relative py-16 pl-32 pr-10 w-1/2'>
          <div className='absolute left-0 top-1/2 
            font-poppins600 text-5xl text-gold
            work__circles w-44 h-44 flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 2</div>
          <p className='font-poppins400 text-description text-3xl'>
            For each person who registers directly using your referral link,
            you will earn 1 USDT for each lottery ticket they purchase.
          </p>
        </div>
        <div className='fade__block_right relative py-16 pl-32 pr-10 w-1/2'>
          <div className='absolute left-0 top-1/2 
            font-poppins600 text-5xl text-gold
            work__circles w-44 h-44 flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 3</div>
          <p className='font-poppins400 text-description text-3xl'>
            For each person who registers directly using your referral link,
            you will earn 1 USDT for each lottery ticket they purchase.
          </p>
        </div>
      </div>
      <p className='mt-8 text-description font-poppins400 text-xl'>Please note that all referral commissions are sent directly to your wallet,
        and the gas fee for all transactions is paid by the buyer of the lottery ticket.</p>
      <p className='font-poppins400 text-description text-4xl w-7/12 mt-8'>
        Start inviting others to join now and unlock the full potential of our referral program!
      </p>
    </div>
  )
}
