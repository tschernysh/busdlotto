import { useContext, useEffect, useRef } from "react";
import { ToastifyContext } from "../../applicationContext";
import Close from 'Assets/close.png'


export const Toastify = () => {
  const { setToastifyData, toastData } = useContext(ToastifyContext)

  const cleartoastData = () => {
    setToastifyData(null)
  }
  console.log(toastData)
  return (
    <>
      {toastData && (<div className={`fixed z-50 left-0 top-0 bg-black/75 backdrop-blur-md w-screen h-screen flex items-center justify-center`}>

        <div className='buy__ticket_modal  rounded-3xl relative text-center py-10 px-28' >
          <img className='absolute right-4 top-4 cursor-pointer' onClick={cleartoastData} src={Close} />
          <p className='font-inter800 text-title text-4xl mb-8'>{toastData.text}</p>
          <p className='text-3xl text-description font-poppins400'>{toastData.description}</p>
        </div>
      </div>)}
    </>
  )
}
