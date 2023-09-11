

export const MainWinning = () => {

  const transactions = [
    { amount: 40, time: '12:25:03 UTC', tx: 'XXXXXX' },
    { amount: 50, time: '12:26:04 UTC', tx: 'XXXXXX' },
    { amount: 60, time: '12:27:05 UTC', tx: 'XXXXXX' },
    { amount: 70, time: '12:28:06 UTC', tx: 'XXXXXX' },
    { amount: 70, time: '12:29:07 UTC', tx: 'XXXXXX' },
  ]

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line mt-20'>
      <h1 className='text-7xl font-inter800 text-white mb-8'>Winning wallets</h1>
      <p className='font-poppins400 text-description text-4xl mb-16'>
        Yours can be here as well!
        Want to see if you have received your prize?
        Check the transactions <a href='https://google.com' className='text-gold'>here.</a>
      </p>
      <div className='flex gap-x-8 items-center mb-16'>
        <div className='flex flex-col gap-y-12 winning__block_border w-full pt-5'>
          {transactions.map(el => {
            return <WinningTile value={el.amount + ' USDT'} />
          })}
        </div>
        <div className='flex flex-col gap-y-12 winning__block_border w-full pt-5'>
          {transactions.map(el => {
            return <WinningTile value={el.time} />
          })}
        </div>
        <div className='flex flex-col gap-y-12 winning__block_border w-full pt-5'>
          {transactions.map(el => {
            return <WinningTile value={el.tx} />
          })}
        </div>
      </div>
    </div>
  )
}

const WinningTile = (props) => {
  console.log(props)
  return (
    <div className='text-white text-4xl font-inter800 winning__block_line text-center '>
      {props.value}
    </div>
  )
}
