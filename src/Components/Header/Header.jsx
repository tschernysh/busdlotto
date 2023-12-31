import { Link, useLocation } from "react-router-dom"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { LanguageSelector } from "Components/LanguageSelector/LanguageSelector"
import Logo from 'Assets/Logo.png'
import Burger from 'Assets/burger.png'
import Tickets from 'Assets/ticketHeader.png'
import { useSelector } from "react-redux"
import { useMemo } from "react"

export const Header = (props) => {

  const { totalTicketsBought } = useSelector(state => state.accountReducer)
  const location = useLocation()

  const Content = useMemo(() => {
    return (
      <header className='sm:bg-prussian backdrop-blur-lg sm:backdrop-blur-0 sm:px-24 mmx:px-0 z-40 sticky top-0 left-0 py-4 sm:py-8'>
        <div className='gap-x-24 px-4 mx-auto justify-between max-w-screen-mmx flex'>
          <Link className='flex items-center' to='/'>
            <img src={Logo} className='w-20 sm:w-32' />
          </Link>
          <div className='font-inter600 hidden text-white sm:flex gap-x-12 items-center'>
            <Link className={`${location.pathname === '/' ? ' text-gold' : ''}`} to='/' >Home</Link>
            <Link className={`${location.pathname === '/works' ? ' text-gold' : ''}`} to='/works' >How it works</Link>
            <Link className={`${location.pathname === '/referral' ? ' text-gold' : ''}`} to='/referral'>Referral program</Link>
            <Link className={`${location.pathname === '/results' ? ' text-gold' : ''}`} to='/results'>Check your results</Link>
          </div>
          <div className='bought__ticket_header flex items-center font-inter600 text-xl text-title py-1 pr-1'>
            <img src={Tickets} />
            <p>{totalTicketsBought}</p>
          </div>
          <ConnectWallet className='hidden sm:block' isHeader={true} />
          <LanguageSelector className='hidden sm:block' />
          <div onClick={() => props.setIsMenu(true)} className='flex items-center justify-center sm:hidden'>
            <img src={Burger} />
          </div>
        </div>
      </header>
    )
  }, [props.setIsMenu, location.pathname, totalTicketsBought])

  return Content
}
