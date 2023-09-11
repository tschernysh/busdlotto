import { Link } from "react-router-dom"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { LanguageSelector } from "Components/LanguageSelector/LanguageSelector"
import Logo from 'Assets/Logo.png'

export const Header = () => {
  return (
    <header className='bg-prussian  py-8'>
      <div className='gap-x-24 mx-auto justify-between max-w-screen-mmx flex'>
        <img src={Logo} />
        <div className='font-inter600 text-white flex gap-x-12 items-center'>
          <Link to='/' >Home</Link>
          <Link to='/works' >How it works</Link>
          <Link to='/referral'>Referral program</Link>
          <Link to='/results'>Check your results</Link>
        </div>
        <ConnectWallet isHeader={true} />
        <LanguageSelector />
      </div>
    </header>
  )
}
