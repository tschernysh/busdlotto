import { ConfigContext } from "applicationContext"
import { Button } from "Components/Button/Button"
import { useContext } from "react"


export const WorkLore = () => {

  const { setBuyModalShow } = useContext(ConfigContext)

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <div className='fade__block_right p-10 flex flex-col gap-y-8 mb-10'>
        <p className='text-description font-poppins400 text-3xl'>Once 20 tickets have been bought, <span className='text-gold font-poppins600'>40 USDT</span> are drawn.</p>
        <p className='text-description font-poppins400 text-3xl'>Once 100 tickets have been bought, <span className='text-gold font-poppins600'>100 USDT</span> are drawn.</p>
        <p className='text-description font-poppins400 text-3xl'>Once 1000 tickets have been bought, <span className='text-gold font-poppins600'>1000 USDT</span> are drawn.</p>
        <p className='text-description font-poppins400 text-3xl'>Once 10000 tickets have been bought, <span className='text-gold font-poppins600'>10000 USDT</span> are drawn.</p>
        <p className='text-description font-poppins400 text-3xl'>Once 100000 tickets have been bought, <span className='text-gold font-poppins600'>100000 USDT</span> are drawn.</p>
        <p className='font-poppins600 text-3xl text-description mb-2'>Simply Amazing</p>
        <p className='text-description font-poppins400 text-3xl'>With just one lottery ticket, you can participate in draws for
          <span className='text-gold'> 40 USDT, 100 USDT, 1 000 USDT, 10 000 USDT </span>, and even <span className='text-gold'>100 000 USDT</span>.
          Isn't this better than a dream? And the more tickets you have,
          the higher your chances of winning. It's even possible to win multiple prizes!</p>
        <p className='font-poppins400 text-xl text-description'>To claim your winnings, simply connect your wallet,
          click on the "Check Your Results" section, and press the
          "Get your reward now!" button.
          Please note that a small gas fee in BNB is required for the transaction.</p>
      </div>
      <div className='text-center w-full'>
        <Button onClick={() => setBuyModalShow(true)} >BUY TICKET</Button>
      </div>
    </div>
  )
}
