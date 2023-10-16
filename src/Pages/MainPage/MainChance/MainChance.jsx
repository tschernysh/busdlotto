import TicketLogo from 'Assets/ticketLogo.png'
import { ConnectWallet } from 'Components/ConnectWallet/ConnectWallet'
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { formatNumber } from 'utils/formatNumber';
import { ReactComponent as Loader } from 'Assets/loader.svg'
import { Button } from 'Components/Button/Button';
import { useEffect, useRef, useState } from 'react';

const carouselOptions = {
  autoPlay: false,
  showArrows: false,
  swipeable: true,
  emulateTouch: true,
  infiniteLoop: true,
  showThumbs: false,
  showStatus: false,
  selectedItem: 1,
  centerSlidePercentage: 100,
}

const tickets = [
  { tickets: 20, reward: 40 },
  { tickets: 100, reward: 100 },
  { tickets: 1000, reward: 1000 },
  { tickets: 10000, reward: 10000 },
  { tickets: 100000, reward: 100000 },
]

export const MainChance = () => {

  const navigate = useNavigate()
  const mainChanceRef = useRef()
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (mainChanceRef.current) {
      observer.observe(mainChanceRef.current);
    }

    return () => {
      if (mainChanceRef.current) {
        observer.unobserve(mainChanceRef.current);
      }
    };
  }, []);

  const { currentTicketIndex } = useSelector(state => state.applicationReducer)
  return (
    <div ref={mainChanceRef} className={`mx-auto ${isVisible && 'block__visible_right'} after__block_line mt-20`}>
      <h1 className='text-5xl sm:text-7xl font-inter800 text-white mb-8 text-center'>Next chance to win!</h1>
      <Carousel className='landing__main__carousel' {...carouselOptions}>
        {tickets.map(el => <Ticket {...el} currentTicketIndex={currentTicketIndex} />)}
      </Carousel>
      <div className='w-full mt-8  mb-16 text-center '>
        <p className='font-poppins400 text-4xl text-description mb-8' >Check if you have won!</p>
        <Button onClick={() => navigate('results')}>check your results</Button>
      </div>
    </div>
  )
}

const Ticket = (props) => {

  const { currentTicketIndexLoader } = useSelector(state => state.applicationReducer)

  return (
    <div className='ticket__block px-5 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-40'>
      <img className='mb-8 sm:mb-20' src={TicketLogo} />
      <div className='ticket__block_field text-7xl font-poppins600 flex items-center text-gold justify-center mb-10'>
        <span className='ticket__left_text'>
          {
            currentTicketIndexLoader
              ? <Loader />
              : props.tickets - props.currentTicketIndex % props.tickets
          }
        </span>
      </div>
      <p className='font-poppins400 text-description text-4xl'>
        tickets till the next <span className='font-poppins600'>{formatNumber(props.reward)} USDT</span> draw
      </p>
    </div>
  )
}
