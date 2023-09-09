import { ReactComponent as DownArrow } from 'Assets/downArrow.svg'

export const LanguageSelector = () => {

  return (
    <div className=''>
      <div className='flex items-center bg-black'>
        <span>EN</span>
        <DownArrow />
      </div>
    </div>
  )
}
