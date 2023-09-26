import { Button } from "Components/Button/Button"
import { useDispatch } from "react-redux"
import { ApplicationActionCreator } from "store/reducers/application/action-creator"


export const ResultsBlock = () => {
  const dispatch = useDispatch()

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

        <div className='items-center flex relative justify-between after__results_line mb-16'>
          <h3 className='font-poppins400 text-description text-3xl'>40 USDT</h3>
          <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>-</h3>
        </div>

        <div className='items-center flex relative justify-between after__results_line mb-16'>
          <h3 className='font-poppins400 text-description text-3xl'>40 USDT</h3>
          <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>-</h3>
        </div>
        <div className='items-center flex relative justify-between after__results_line mb-16'>
          <h3 className='font-poppins400 text-description text-3xl'>40 USDT</h3>
          <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>-</h3>
        </div>
        <div className='items-center flex relative justify-between after__results_line mb-16'>
          <h3 className='font-poppins400 text-description text-3xl'>40 USDT</h3>
          <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>-</h3>
        </div>
        <div className='items-center flex relative justify-between '>
          <h3 className='font-poppins400 text-description text-3xl'>40 USDT</h3>
          <h3 className='font-poppins400 text-description text-3xl flex items-center gap-x-2'>-</h3>
        </div>
      </div>
      <Button onClick={handleClaim}>Claim</Button>
    </div>
  )
}
