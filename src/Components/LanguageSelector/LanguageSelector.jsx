import { ReactComponent as DownArrow } from 'Assets/downArrow.svg'

export const LanguageSelector = () => {

  return (
    <div className=''>
      <div className='flex bg-black rounded-xl items-center gap-x-2 py-3 px-2'>
        <span className='font-inter600 text-white '>EN</span>
        <DownArrow />
      </div>
    </div>
  )
}
