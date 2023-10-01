import { useState } from "react"
import { ReactComponent as Arrow } from 'Assets/arrow.svg'
import { ReactComponent as ArrowDown } from 'Assets/downArrow.svg'


export const MainFaq = () => {

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto px-4 sm:px-0 after__block_line'>
      <h1 className='font-inter800 text-5xl sm:text-7xl mb-24 text-white'>
        FAQ
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
      className='flex flex-col justify-between items-center bg-blue px-5 py-8 sm:px-8 sm:pt-8 sm:pb-10 cursor-pointer rounded-2xl'>
      <div className='flex items-center justify-between w-full'>
        <h3 className='text-2xl sm:text-3xl font-poppins400 text-title'>What is CHAINLOTTO?</h3>
        <div>
          {isOpened ? <Arrow className='sm:w-20 sm:h-20 w-8 h-8' /> : <ArrowDown className='sm:w-20 sm:h-20 w-8 h-8' />}
        </div>
      </div>
      {isOpened && <p className='mt-5 text-xl font-poppins400 text-description'>
        CHAINLOTTO is a decentralized lottery operating on the Polygon Network,
        featuring a 3-level referral program.
        It is powered by a smart contract, ensuring transparency
        and fairness throughout the lottery process.
      </p>}
    </div >

  )
}
