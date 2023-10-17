import { Button } from "Components/Button/Button"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationActionCreator } from "store/reducers/application/action-creator"
import { ReactComponent as Loader } from 'Assets/loader.svg'


export const ResultsBlock = () => {
  const dispatch = useDispatch()
  const { userWinnings, availableReward } = useSelector(state => state.accountReducer)
  const { isWithdrawTransaction } = useSelector(state => state.applicationReducer)


  const handleClaim = () => {
    dispatch(ApplicationActionCreator.withdraw())
  }

  return (
    <div className={`mt-20 pb-20 -mb-20 max-w-screen-mmx  mx-auto relative z-10`}>
      <div className='bg-blue sm:rounded-2xl p-10 w-full sm:w-8/12 mx-auto'>
        <div className='flex items-center justify-between mb-12'>
          <h3 className='font-poppins600 text-gold text-4xl'>Winnings</h3>
          <h3 className='font-poppins600 text-gold text-4xl'>Results</h3>
        </div>

        {Object.keys(userWinnings).map(el => <ResultTile title={el} value={userWinnings[el]} />)}

      </div>
      <div className='text-center mt-12 px-4 sm:px-0'>
        <Button
          className={`${isWithdrawTransaction && 'px-4 py-2'}`}
          disabled={!availableReward || isWithdrawTransaction}
          onClick={handleClaim}>
          {
            isWithdrawTransaction
              ? <Loader className='w-8 h-8' />
              : 'Get your reward now!'
          }

        </Button>
      </div>
    </div>
  )
}

const ResultTile = (props) => {
  return (
    <div className='items-center flex relative justify-between after__results_line mb-16'>
      <h3 className='font-poppins400 text-description text-3xl'>{props.title} USDT</h3>
      <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>{props.value}</h3>
    </div>
  )
}
