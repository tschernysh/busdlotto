import { Route, Routes } from "react-router-dom"
import { MainPage } from "Pages/MainPage/MainPage"
import { WorkPage } from "Pages/WorkPage/WorkPage"
import { ReferralPage } from "Pages/ReferralPage/ReferralPage"
import { ResultsPage } from "Pages/ResultsPage/ResultsPage"
import { useAccount, useWalletClient } from "wagmi"
import { useDispatch } from "react-redux"
import { AccountActionCreator } from "store/reducers/account/action-creator"
import { ApplicationActionCreator } from "store/reducers/application/action-creator"
import { useEffect } from "react"
import { Web3Modal } from "@web3modal/react"


export const ApplicationRoutes = (props) => {

  const { connector: activeConnector, address, isConnecting, isDisconnected } = useAccount()
  const { data, isError } = useWalletClient()
  const dispatch = useDispatch()

  const disconnectWallet = () => {
    dispatch(AccountActionCreator.resetUserInfo())
    dispatch(ApplicationActionCreator.setWalletAddress(null))
  }

  useEffect(() => {
    console.log(address, data)
    if (!!data && !isDisconnected) {
      dispatch(ApplicationActionCreator.setWeb3(data))
      dispatch(ApplicationActionCreator.connectConnectWallet())
    } else if (data === undefined && isDisconnected === undefined) {
      disconnectWallet()
    }
  }, [address, data])

  useEffect(() => {
    if (isDisconnected) {
      disconnectWallet()
    }
  }, [isDisconnected])

  return (
    <>
      <Web3Modal explorerRecommendedWalletIds={[
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
      ]} projectId={props.projectId} ethereumClient={props.ethereumClient} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/works' element={<WorkPage />} />
        <Route path='/referral' element={<ReferralPage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </>
  )
}
