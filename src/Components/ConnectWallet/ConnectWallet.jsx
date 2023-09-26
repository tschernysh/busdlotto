import { useWeb3Modal } from "@web3modal/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export const ConnectWallet = (props) => {
  const { walletAddress } = useSelector(state => state.applicationReducer)


  const { open } = useWeb3Modal()

  const styles = props.isHeader
    ? 'bg-gold rounded-lg leading-3 py-3 px-2 font-inter600 text-xl text-title'
    : 'font-inter600 text-title text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-24'

  return (
    <button onClick={open} className={`${styles} ${props.className}  `}>
      {walletAddress ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-6) : 'Connect Wallet'}
    </button >
  )
}
