import { ConfigContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const MainTitle = () => {
  const { setBuyModalShow } = useContext(ConfigContext)

  return (
    <div className='max-w-screen-mmx sm:pt-0 pt-56 sm:px-0 px-4 mx-auto after__block_line'>
      <h1 className='font-inter800 text-5xl sm:text-c text-title   flex flex-col '>
        <span className='leading-[1.1em] block mt-14'>Win up to </span>
        <span className='leading-[1.1em] text-gold'>100K USDT</span>
      </h1>
      <p className='sm:my-14 my-8 font-poppins400 text-3xl sm:text-4xl text-description sm:w-1/2'>
        Experience a fully automated smart-contract DeFi lottery with an 3-level referral program
      </p>
      <p className='text-gold text-4xl sm:text-6xl font-poppins600 mb-10 sm:mb-16'>
        1 ticket — only <span className='font-poppins600'>10 USD</span>
      </p>
      <div className='gap-x-8 flex flex-col gap-y-5 sm:flex-row  items-center mb-16'>
        <Button onClick={() => setBuyModalShow(true)}>buy ticket now!</Button>
        <Link to='results' className='w-full whitespace-nowrap sm:w-min text-center font-inter600 text-title text-base sm:text-xl py-5 bg-blueDisabled uppercase rounded-xl leading-3 px-2 sm:px-24'>check your results</Link>
      </div>
    </div>

  )
}
