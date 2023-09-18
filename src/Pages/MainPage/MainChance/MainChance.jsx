import TicketLogo from 'Assets/ticketLogo.png'
import { ConnectWallet } from 'Components/ConnectWallet/ConnectWallet'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselOptions = {
  autoPlay: false,
  showArrows: true,
  swipeable: true,
  emulateTouch: true,
  infiniteLoop: true,
  showThumbs: false,
  showStatus: false,
  selectedItem: 1,
  centerSlidePercentage: 100,
}

export const MainChance = () => {

  return (
    <div className='mx-auto after__block_line mt-20'>
      <h1 className='text-7xl font-inter800 text-white mb-8 text-center'>Next chance to win!</h1>
      <Carousel className='landing__main__carousel' {...carouselOptions}>
        <Ticket />
        <Ticket />
        <Ticket />
      </Carousel>
      <div className='w-full mt-8  mb-16 text-center '>
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
