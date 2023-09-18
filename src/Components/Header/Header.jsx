import { Link } from "react-router-dom"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { LanguageSelector } from "Components/LanguageSelector/LanguageSelector"
import Logo from 'Assets/Logo.png'
import Burger from 'Assets/burger.png'

export const Header = () => {
  return (
    <header className='sm:bg-prussian py-8'>
      <div className='gap-x-24 px-4 mx-auto justify-between max-w-screen-mmx flex'>
        <img src={Logo} className='w-20 sm:w-32' />
        <div className='font-inter600 hidden text-white sm:flex gap-x-12 items-center'>
          <Link to='/' >Home</Link>
          <Link to='/works' >How it works</Link>
          <Link to='/referral'>Referral program</Link>
          <Link to='/results'>Check your results</Link>
        </div>
        <ConnectWallet className='hidden sm:block' isHeader={true} />
        <LanguageSelector className='hidden sm:block' />
        <div className='flex items-center justify-center sm:hidden'>
          <img src={Burger} />
        </div>
      </div>
    </header>
  )
}
