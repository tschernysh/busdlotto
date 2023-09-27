import { Button } from "Components/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationActionCreator } from "store/reducers/application/action-creator"


export const ResultsBlock = () => {
  const dispatch = useDispatch()
  const { userWinnings, availableReward } = useSelector(state => state.accountReducer)

  const handleClaim = () => {
    dispatch(ApplicationActionCreator.withdraw())
  }

  return (
    <div className='mt-20 pb-20 -mb-20 max-w-screen-mmx mx-auto'>
      <div className='bg-blue rounded-2xl p-10 w-8/12 mx-auto'>
        <div className='flex items-center justify-between mb-12'>
          <h3 className='font-poppins600 text-gold text-4xl'>Winnings</h3>
          <h3 className='font-poppins600 text-gold text-4xl'>Results</h3>
        </div>

        {Object.keys(userWinnings).map(el => <ResultTile title={el} value={userWinnings[el]} />)}

      </div>
      <div className='text-center mt-12'>
        <Button disabled={!availableReward} onClick={handleClaim}>Claim</Button>
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
