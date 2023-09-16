import { useState } from "react"
import { ReactComponent as Arrow } from 'Assets/arrow.svg'
import { ReactComponent as ArrowDown } from 'Assets/downArrow.svg'


export const MainFaq = () => {

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto after__block_line'>
      <h1 className='font-inter800 text-7xl mb-24 text-white'>
        Tell your friends & <span>earn extra!</span>
      </h1>
      <div className='mb-16'>

        <FaqTile />
      </div>
    </div>
  )
}

const FaqTile = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div
      onClick={() => setIsOpened(!isOpened)}
      className='flex justify-between items-center bg-blue px-8 pt-8 pb-10 cursor-pointer rounded-2xl'>
      <div>
        <h3 className='text-3xl font-poppins400 text-title'>What is CHAINLOTTO?</h3>
        {isOpened && <p className='mt-5 text-xl font-poppins400 text-description'>
          CHAINLOTTO is a decentralized lottery operating on the Polygon Network,
          featuring a 3-level referral program.
          It is powered by a smart contract, ensuring transparency
          and fairness throughout the lottery process.
        </p>}
      </div>
      <div>
        {isOpened ? <Arrow className='w-20 h-20' /> : <ArrowDown className='w-20 h-20' />}
      </div>
    </div >

  )
}
