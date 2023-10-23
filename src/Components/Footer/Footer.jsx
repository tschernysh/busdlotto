import { ReactComponent as Instagram } from 'Assets/socialMedia/instagram.svg'
import { ReactComponent as Telegram } from 'Assets/socialMedia/telegram.svg'
import { ReactComponent as Twitter } from 'Assets/socialMedia/twitter.svg'
import { ReactComponent as Youtube } from 'Assets/socialMedia/youtube.svg'
import { useMemo } from 'react'

export const Footer = () => {

  const Content = useMemo(() => {
    return (
      <footer className='bg-prussian mmx:px-0 sm:px-24 py-8 mt-20'>
        <div className='flex flex-col sm:flex-row gap-y-8 items-center mx-auto justify-between max-w-screen-mmx'>
          <div className='flex items-center gap-x-8'>
            <a href='https://www.instagram.com/chain_lotto/' target='_blank' className=''>
              <div className='bg-blueDisabled rounded-xl px-2 py-2'>
                <Instagram />
              </div>
            </a>
            <a href='https://twitter.com/chain_lotto' target='_blank' className=''>
              <div className='bg-blueDisabled rounded-xl px-2 py-2'>
                <Twitter />
              </div>
            </a>
            <a href='https://t.me/chainlotto_chat' target='_blank' className=''>
              <div className='bg-blueDisabled rounded-xl px-2 py-2'>
                <Telegram />
              </div>
            </a>
            <a href='https://t.me/chainlotto' target='_blank' className=''>
              <div className='bg-blueDisabled rounded-xl px-2 py-2'>
                <Telegram />
              </div>
            </a>
            <a href='https://www.youtube.com/@chainlotto' target='_blank' className=''>
              <div className='bg-blueDisabled rounded-xl px-2 py-2'>
                <Youtube />
              </div>
            </a>
          </div>
          <a
            className='text-description text-2xl sm:text-3xl font-poppins400'
            href='mailto:support@chainlotto.io'
            target='_blank'>support@chainlotto.io</a>
        </div>
      </footer>
    )
  })

  return Content

}
