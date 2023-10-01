import { ConfigContext } from 'applicationContext'
import Close from 'Assets/close.png'
import { Button } from 'Components/Button/Button'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationActionCreator } from 'store/reducers/application/action-creator'

export const BuyTicket = () => {
  const { setBuyModalShow } = useContext(ConfigContext)
  const { buyTicketsAmount } = useSelector(state => state.applicationReducer)
  const dispatch = useDispatch()

  const handlePlusTicketAmount = () => {
    dispatch(ApplicationActionCreator.setBuyTicketsAmount(buyTicketsAmount + 1))
  }

  const handleMinusTicketAmount = () => {
    dispatch(ApplicationActionCreator.setBuyTicketsAmount(buyTicketsAmount - 1))
  }

  const handleCloseModal = () => {
    setBuyModalShow(false)
  }

  const handleBuyTickets = () => {
    dispatch(ApplicationActionCreator.buyTicket())
  }

  return (
    <div className='fixed w-screen h-screen left-0 top-0 bg-black/75 flex backdrop-blur-md items-center justify-center'>
      <div className='w-2/3  buy__ticket_modal  rounded-3xl relative text-center py-10 px-8'>
        <img className='absolute right-4 top-4 cursor-pointer' onClick={handleCloseModal} src={Close} />
        <h1 className='text-title text-4xl font-inter800 mb-8'>Buy Ticket</h1>
        <p className='font-poppins400 text-3xl text-description mb-8'>Select number of tickets to buy</p>
        <div className='flex items-center gap-x-10 justify-center mb-10'>
          <div className='flex items-center justify-center bg-gold text-title w-10 h-10 rounded-full text-4xl cursor-pointer ' onClick={handleMinusTicketAmount}>
            <span style={{ transform: 'translate(0px, -2px)' }}>
              -
            </span>
          </div>
          <div className='font-inter400 text-title text-4xl'>{buyTicketsAmount}</div>
          <div className='flex items-center justify-center bg-gold text-title w-10 h-10 rounded-full text-4xl cursor-pointer' onClick={handlePlusTicketAmount}>
            <span style={{ transform: 'translate(0px, -2px)' }}>
              +
            </span>
          </div>
        </div>
        <p className='text-base text-description font-poppins400 mb-10'>
          By clicking the button below, you can purchase a lottery ticket worth 10 USD.
          There is no limit to how many tickets can be bought.
          If you win, you can claim your rewards in the "Check Your Results" section.
        </p>
        <Button onClick={handleBuyTickets}>Buy Ticket</Button>
      </div>
    </div>
  )
}
