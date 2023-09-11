import { ReactComponent as Instagram } from 'Assets/socialMedia/instagram.svg'
import { ReactComponent as Telegram } from 'Assets/socialMedia/telegram.svg'
import { ReactComponent as Twitter } from 'Assets/socialMedia/twitter.svg'
import { ReactComponent as Youtube } from 'Assets/socialMedia/youtube.svg'

export const Footer = () => {

  return (
    <footer className='bg-prussian py-8'>
      <div className='flex items-center mx-auto justify-between max-w-screen-mmx'>
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
          className='text-description text-3xl font-poppins400'
          href='https://support@chainlotto.io'
          target='_blank'>support@chainlotto.io</a>
      </div>
    </footer>
  )
}
