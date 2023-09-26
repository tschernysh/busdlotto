import { ConfigContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const MainTitle = () => {
  const { setBuyModalShow } = useContext(ConfigContext)

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line'>
      <h1 className='font-inter800 text-c text-title  flex flex-col '>
        <span className='leading-[1.1em] block mt-14'>Win up to </span>
        <span className='leading-[1.1em] text-gold'>100K USDT</span>
      </h1>
      <p className='my-14 font-poppins400 text-4xl text-description w-1/2'>
        Experience a fully automated smart-contract DeFi lottery with an 3-level referral program
      </p>
      <p className='text-gold text-6xl font-poppins400 mb-16'>
        1 ticket — only <span className='font-poppins600'>10 USD</span>
      </p>
      <div className='gap-x-8 flex items-center mb-16'>
        <Button onClick={() => setBuyModalShow(true)}>buy ticket now!</Button>
        <Link to='results' className='font-inter600 text-title text-xl py-5 bg-blueDisabled uppercase rounded-xl leading-3 px-24'>check your results</Link>
      </div>
    </div>

  )
}
