import Crown from 'Assets/results/crown.png'
import { useSelector } from 'react-redux'

export const ResultsTitle = () => {

  const { walletAddress } = useSelector(state => state.applicationReducer)

  const walletToShow = walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : 'Connect wallet first'

  return (
    <div className='pt-20 max-w-screen-mmx mx-auto text-center z-10 relative'>
      <h1 className='font-inter800 text-5xl sm:text-7xl mb-24 text-white w-full sm:5/12 mx-auto'>
        Check your results
      </h1>
      <div className='w-full px-4 sm:px-0 sm:w-1/2 mx-auto text-center'>
        <img className='mx-auto' src={Crown} />
        <div className='font-poppins400 rounded-2xl text-xl sm:text-3xl text-description py-5 px-4 sm:py-8 sm:px-10 bg-blue'>Your wallet address: <span className='text-gold'>{walletToShow}</span></div>
      </div>
    </div>
  )
}
