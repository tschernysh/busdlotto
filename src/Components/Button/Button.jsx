import { useWeb3Modal } from "@web3modal/react"
import { useSelector } from "react-redux"

export const Button = (props) => {
  const { open } = useWeb3Modal()
  const { walletAddress } = useSelector(state => state.applicationReducer)

  return (
    <button
      onClick={walletAddress ? props.onClick : open}
      disabled={props.disabled}
      className={`${props.disabled ? 'bg-gray-600' : 'bg-gold'} font-inter600 text-title text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-24`}
    >
      {props.children}
    </button>
  )
}
