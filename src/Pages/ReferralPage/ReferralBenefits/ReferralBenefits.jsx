

export const ReferralBenefits = () => {
  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <div className='px-4 sm:px-0'>
        <h1 className='font-inter800 text-5xl sm:text-7xl mb-5 text-right sm:mb-24 text-white'>
          Experience the benefits
        </h1>
        <p className='font-poppins400 text-description text-right sm:w-7/12 ml-auto text-2xl mb-16'>
          As a valued participant of CHAINLOTTO, we have exciting rewards waiting for you.
          By <span className='text-gold font-poppins600'>referring others</span> to join the lottery, you can <span className='text-gold font-poppins600'>earn referral commissions</span> and
          maximize your chances of winning.
        </p>
      </div>
      <div className='flex flex-col gap-y-24 sm:gap-y-10'>
        <div className='fade__block_right relative sm:py-16 sm:pl-32 sm:pr-10  pl-4 pr-4 pt-20 pb-8 w-full sm:w-1/2'>
          <div className='absolute left-1/2 sm:left-0 top-0 sm:top-1/2 
            sm:text-5xl text-gold font-poppins600
            work__circles sm:w-44 sm:h-44 w-28 text-3xl h-28  flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 1</div>
          <p className='font-poppins400 text-description text-3xl'>
            For each person who registers directly using your referral link,
            you will <span className='text-gold font-poppins600'>earn 1 USDT</span> for each lottery ticket they purchase.
          </p>
        </div>
        <div className='fade__block_right self-end relative  sm:py-16 sm:pl-32 sm:pr-10  pl-4 pr-4 pt-20 pb-8 w-full sm:w-1/2'>
          <div className='absolute left-1/2 sm:left-0 top-0 sm:top-1/2 
            sm:text-5xl text-gold font-poppins600
            work__circles sm:w-44 sm:h-44 w-28 text-3xl h-28 flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 2</div>
          <p className='font-poppins400 text-description text-3xl'>
            If someone registers through the referral link of another person who is directly
            registered under you (second line), you will <span className='text-gold font-poppins600'>earn an additional 1 USDT</span> for each lottery ticket they purchase.
          </p>
        </div>
        <div className='fade__block_right relative sm:py-16 sm:pl-32 sm:pr-10  pl-4 pr-4 pt-16 pb-8 w-full sm:w-1/2'>
          <div className='absolute left-1/2 sm:left-0 top-0 sm:top-1/2 
            sm:text-5xl text-gold font-poppins600
            work__circles sm:w-44 sm:h-44 w-28 text-3xl h-28 flex items-center 
            justify-center transform -translate-x-1/2 -translate-y-1/2'>Lvl 3</div>
          <p className='font-poppins400 text-description text-3xl'>
            If someone registers using the referral link of another person who is registered on your third line
            , you will <span className='text-gold font-poppins600'>earn an additional 1 USDT</span> for each lottery ticket they purchase.
          </p>
        </div>
      </div>
      <div className='px-4 sm:px-0'>
        <p className='mt-8 text-description font-poppins400 text-xl'>Please note that all referral commissions are sent directly to your wallet,
          and the gas fee for all transactions is paid by the buyer of the lottery ticket.</p>
        <p className='font-poppins400 text-description text-4xl w-full sm:w-7/12 mt-8'>
          <span className='text-gold font-poppins600'>Start inviting</span> others to join now and <span className='text-gold font-poppins600'>unlock the full potential</span> of our referral program!
        </p>
      </div>
    </div>
  )
}
