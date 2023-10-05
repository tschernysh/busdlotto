import { ReactComponent as Instagram } from 'Assets/socialMedia/instagram.svg'
import { ReactComponent as Telegram } from 'Assets/socialMedia/telegram.svg'
import { ReactComponent as Twitter } from 'Assets/socialMedia/twitter.svg'
import { ReactComponent as Youtube } from 'Assets/socialMedia/youtube.svg'
import Logo from 'Assets/Logo.png'
import Close from 'Assets/close.png'
import { Link, useLocation } from 'react-router-dom'

export const MobileMenu = (props) => {

  const location = useLocation()

  const handleCloseMenu = () => {
    props.setIsMenu(false)
  }

  return (
    <div className='fixed w-screen h-screen z-50 left-0 top-0 menu__gradient flex flex-col items-center'>
      <img className='absolute w-8 h-8 sm:w-12 sm:h-12 right-4 top-4 cursor-pointer' onClick={handleCloseMenu} src={Close} />
      <Link onClick={handleCloseMenu} to='/'>
        <img src={Logo} className='w-40 mt-10 mb-24' />
      </Link>
      <div className='flex flex-col gap-y-16 font-inter600 text-2xl text-title text-center'>
        <Link onClick={handleCloseMenu} className={`${location.pathname === '/' ? ' text-gold' : ''}`} to='/' >Home</Link>
        <Link onClick={handleCloseMenu} className={`${location.pathname === '/works' ? ' text-gold' : ''}`} to='/works' >How it works</Link>
        <Link onClick={handleCloseMenu} className={`${location.pathname === '/referral' ? ' text-gold' : ''}`} to='/referral'>Referral program</Link>
        <Link onClick={handleCloseMenu} className={`${location.pathname === '/results' ? ' text-gold' : ''}`} to='/results'>Check your results</Link>
      </div>
      <div className='flex items-center gap-x-10 mt-16 mb-24 font-inter600 text-2xl text-title'>
        <span>EN</span>
        <span>RU</span>
      </div>
      <div className='flex flex-col sm:flex-row gap-y-8 items-center mx-auto justify-between max-w-screen-mmx'>
        <div className='flex items-center gap-x-8'>
          <a href='https://instagram.com' target='_blank' className=''>
            <div className='bg-blueDisabled rounded-xl px-2 py-2'>
              <Instagram />
            </div>
          </a>
          <a href='https://instagram.com' target='_blank' className=''>
            <div className='bg-blueDisabled rounded-xl px-2 py-2'>
              <Twitter />
            </div>
          </a>
          <a href='https://instagram.com' target='_blank' className=''>
            <div className='bg-blueDisabled rounded-xl px-2 py-2'>
              <Telegram />
            </div>
          </a>
          <a href='https://instagram.com' target='_blank' className=''>
            <div className='bg-blueDisabled rounded-xl px-2 py-2'>
              <Telegram />
            </div>
          </a>
          <a href='https://instagram.com' target='_blank' className=''>
            <div className='bg-blueDisabled rounded-xl px-2 py-2'>
              <Youtube />
            </div>
          </a>
        </div>
        <a
          className='text-description text-2xl sm:text-3xl font-poppins400'
          href='https://support@chainlotto.io'
          target='_blank'>support@chainlotto.io</a>
      </div>
    </div>
  )
}
