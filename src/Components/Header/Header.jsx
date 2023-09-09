import { Link } from "react-router-dom"
import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { LanguageSelector } from "Components/LanguageSelector/LanguageSelector"

export const Header = () => {
  return (
    <header>
      <img />
      <div className='font-inter600 text-white'>
        <Link to='/' >Home</Link>
        <Link to='/works' >How it works</Link>
        <Link to='/referral'>Referral program</Link>
        <Link to='/results'>Check your results</Link>
      </div>
      <ConnectWallet />
      <LanguageSelector />
    </header>
  )
}
