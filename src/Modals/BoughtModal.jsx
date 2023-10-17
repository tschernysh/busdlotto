import { ConfigContext } from 'applicationContext'
import Close from 'Assets/close.png'
import Goodluck from 'Assets/goodluck.png'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationActionCreator } from 'store/reducers/application/action-creator'

export const BoughtModal = () => {
  const { setBoughtModalShow } = useContext(ConfigContext)
  const { buyTicketsAmount } = useSelector(state => state.applicationReducer)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(ApplicationActionCreator.setBuyTicketsAmount(1))
    setBoughtModalShow(false)
  }

  return (
    <div className='fixed w-screen h-screen left-0 top-0 z-20 backdrop-brightness-50 flex backdrop-blur-md items-center justify-center bought__ticket_bg'>
      <div className='w-full mx-4 sm:mx-0 sm:w-2/3 z-30 bought__ticket_modal  rounded-3xl relative text-center py-10 px-8'>
        <img className='absolute button__focus w-8 h-8 sm:w-12 sm:h-12 right-4 top-4 cursor-pointer' onClick={handleCloseModal} src={Close} />
        <img className='mx-auto' src={Goodluck} />
        <p className='font-poppins400 text-3xl text-description mt-4 mb-8'>You have successfully bought <span className='text-gold'> {buyTicketsAmount} </span> lottery tickets.</p>
        <p className='font-poppins400 text-description text-base'>Come back soon to check if you have won!</p>
      </div>
    </div>
  )
}
