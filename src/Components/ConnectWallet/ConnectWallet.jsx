import { useWeb3Modal } from "@web3modal/react"


export const ConnectWallet = (props) => {

  const { open } = useWeb3Modal()

  const styles = props.isHeader
    ? 'bg-gold rounded-lg leading-3 py-3 px-2 font-inter600 text-xl text-title'
    : 'font-inter600 text-title text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-24'

  return (
    <button onClick={open} className={`${styles} ${props.className}`}>
      Connect Wallet
    </button >
  )
}
