import { ConfigContext } from 'applicationContext'
import Close from 'Assets/close.png'
import { Button } from 'Components/Button/Button'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationActionCreator } from 'store/reducers/application/action-creator'
import { ReactComponent as Loader } from 'Assets/loader.svg'
import { ReactComponent as Minus } from 'Assets/minus.svg'
import { ReactComponent as Plus } from 'Assets/plus.svg'

export const BuyTicket = () => {
  const { setBuyModalShow } = useContext(ConfigContext)
  const { buyTicketsAmount, isDepositTransaction } = useSelector(state => state.applicationReducer)
  const dispatch = useDispatch()

  const handlePlusTicketAmount = () => {
    dispatch(ApplicationActionCreator.setBuyTicketsAmount(buyTicketsAmount + 1))
  }

  const handleMinusTicketAmount = () => {
    if (buyTicketsAmount <= 1) return
    dispatch(ApplicationActionCreator.setBuyTicketsAmount(buyTicketsAmount - 1))
  }

  const handleCloseModal = () => {
    setBuyModalShow(false)
  }

  const handleBuyTickets = () => {
    dispatch(ApplicationActionCreator.buyTicket())
  }

  return (
    <div className='fixed w-screen h-screen left-0 z-20 top-0 bg-black/75 flex backdrop-blur-md items-center justify-center'>
      <div className='w-full mx-4 sm:mx-0 sm:w-2/3 z-30 buy__ticket_modal  rounded-3xl relative text-center py-10 px-8'>
        <img className='button__focus absolute w-8 h-8 sm:w-12 sm:h-12 right-4 top-4 cursor-pointer' onClick={handleCloseModal} src={Close} />
        <h1 className='text-title text-4xl font-inter800 mb-8'>Buy Ticket</h1>
        <p className='font-poppins400 text-3xl text-description mb-8'>Select number of tickets to buy</p>
        <div className='flex items-center gap-x-10 justify-center mb-10'>
          <div className='flex items-center justify-center bg-gold text-title w-10 h-10 rounded-full text-4xl cursor-pointer ' onClick={handleMinusTicketAmount}>
            <span style={{ transform: 'translate(0px, -2px)' }}>
              <Minus className='w-4 h-4 absolute top-1/2 left-1/2 transform -translate-y-1/3 -translate-x-1/2 fill-white' />
            </span>
          </div>
          <div className='font-inter400 text-title text-4xl'>{buyTicketsAmount}</div>
          <div className='flex items-center justify-center bg-gold text-title w-10 h-10 rounded-full text-4xl cursor-pointer' onClick={handlePlusTicketAmount}>
            <span style={{ transform: 'translate(0px, -2px)' }}>
              <Plus className='w-4 h-4 absolute top-1/2 left-1/2 transform -translate-y-1/3 -translate-x-1/2 fill-white' />
            </span>
          </div>
        </div>
        <p className='text-base text-description font-poppins400 mb-5'>
          By clicking the button below, you can purchase a lottery ticket worth 10 USD.
          There is no limit to how many tickets can be bought.
          If you win, you can claim your rewards in the "Check Your Results" section.
        </p>
        <p className='text-base text-gold sm:hidden font-poppins400 mb-10'>
          In case your Android device is rejected, please redo the purchase from your computer!
        </p>
        <Button className={`${isDepositTransaction && 'px-4 py-2'}`} disabled={isDepositTransaction} onClick={handleBuyTickets}>
          {
            isDepositTransaction
              ? <Loader className='w-8 h-8' />
              : 'Buy Ticket'
          }
        </Button>
      </div>
    </div>
  )
}
