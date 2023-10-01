import { useSelector } from "react-redux"


export const MainWinning = () => {

  const { lastWinnings } = useSelector(state => state.applicationReducer)

  //time.toLocaleTimeString()

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line mt-20'>
      <h1 className='text-4xl sm:text-7xl px-4 sm:px-0 font-inter800 text-white mb-8'>Winning wallets</h1>
      <p className='font-poppins400 text-description px-4 sm:px-0 text-3xl sm:text-4xl mb-16'>
        Yours can be here as well!
        Want to see if you have received your prize?
        Check the transactions <a href='https://google.com' className='text-gold'>here.</a>
      </p>
      <div className='flex gap-x-8 items-center mb-16 w-full overflow-x-auto'>
        <div className='flex flex-col gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          {lastWinnings.map(el => {
            return <WinningTile value={el.amount + ' USDT'} />
          })}
        </div>
        <div className='flex flex-col gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          {lastWinnings.map(el => {
            return <WinningTile value={new Date(el.time).toLocaleTimeString()} />
          })}
        </div>
        <div className='flex flex-col gap-y-12 winning__block_border w-full sm:px-0 px-4 pt-5'>
          {lastWinnings.map(el => {
            return <WinningTile value={el.wallet.slice(0, 4) + '...' + el.wallet.slice(-4)} />
          })}
        </div>
      </div>
    </div>
  )
}

const WinningTile = (props) => {
  return (
    <div className='text-white text-4xl font-inter800 winning__block_line whitespace-nowrap text-center '>
      {props.value}
    </div>
  )
}
