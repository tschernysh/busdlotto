import TicketLogo from 'Assets/ticketLogo.png'
import { ConnectWallet } from 'Components/ConnectWallet/ConnectWallet'

export const MainChance = () => {

  return (
    <div className='max-w-screen-mmx mx-auto after__block_line mt-20'>
      <h1 className='text-7xl font-inter800 text-white mb-8 text-center'>Next chance to win!</h1>
      <div className='flex items-center mb-8'>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className='w-full text-center '>
        <p className='font-poppins400 text-4xl text-description mb-8' >Check if you have won!</p>
        <ConnectWallet />
      </div>
    </div>
  )
}

const Ticket = (props) => {

  return (
    <div className='ticket__block px-8 pt-32 pb-40'>
      <img className='mb-20' src={TicketLogo} />
      <div className='ticket__block_field mb-10'></div>
      <p className='font-poppins400 text-description text-4xl'>
        tickets till the next <span className='font-poppins600'>100 USDT</span> draw
      </p>
    </div>
  )
}
