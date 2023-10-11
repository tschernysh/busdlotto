import logo from './logo.svg';
import 'App.css';
import { HashRouter } from 'react-router-dom';
import { Header } from 'Components/Header/Header';
import { Footer } from 'Components/Footer/Footer';
import { ApplicationRoutes } from 'Routes/ApplicationRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { initWagmi } from 'utils/initWagmi';
import { WagmiConfig } from 'wagmi';
import { ApplicationActionCreator } from 'store/reducers/application/action-creator';
import { Config } from 'config';
import { ConfigContext, ToastifyContext } from 'applicationContext';
import { BuyTicket } from 'Modals/BuyTicket';
import { BoughtModal } from 'Modals/BoughtModal';
import { AccountActionCreator } from 'store/reducers/account/action-creator';
import { Toastify } from 'Components/Toastify/Toastify';
import { MobileMenu } from 'Components/MobileMenu/MobileMenu';

function App() {
  const dispatch = useDispatch()
  const {
    walletAddress, isNeedToUpdate, notCorrectChain,
    toastData } = useSelector(state => state.applicationReducer)
  const [seconds, setSeconds] = useState(0)
  const [wagmiConfig, setWagmiConfig] = useState()
  const [ethereumClient, setEthereumClient] = useState()
  const [projectId, setProjectId] = useState()
  const [buyModalShow, setBuyModalShow] = useState(false)
  const [boughtModalShow, setBoughtModalShow] = useState(false)
  const [isMenu, setIsMenu] = useState(false)


  useMemo(() => {
    const { wagmiConfig, ethereumClient, projectId } = initWagmi()

    setWagmiConfig(wagmiConfig)
    setEthereumClient(ethereumClient)
    setProjectId(projectId)
  }, [])

  useEffect(() => {
    dispatch(ApplicationActionCreator.getLastWinners())
    dispatch(ApplicationActionCreator.getCurrentTicketIndex())
    dispatch(ApplicationActionCreator.getDefaultReferrer())
    if (walletAddress) {
      dispatch(AccountActionCreator.getUpline())
      dispatch(ApplicationActionCreator.getAccountMaticBalance())
      dispatch(ApplicationActionCreator.getAccountTokenBalance())
      dispatch(AccountActionCreator.getUserWinnings())
      dispatch(AccountActionCreator.getReferralsBonus())
      dispatch(AccountActionCreator.getAvailableRewards())
      dispatch(AccountActionCreator.getTotalTicketsBought())
    }
  }, [walletAddress])



  useEffect(() => {
    let interval
    interval = setInterval(() => {
      if (!seconds) {
        if (notCorrectChain) return
        dispatch(ApplicationActionCreator.getLastWinners())
        dispatch(ApplicationActionCreator.getCurrentTicketIndex())
        if (walletAddress) {
          dispatch(AccountActionCreator.getUpline())
          dispatch(ApplicationActionCreator.getAccountMaticBalance())
          dispatch(ApplicationActionCreator.getAccountTokenBalance())
          dispatch(AccountActionCreator.getUserWinnings())
          dispatch(AccountActionCreator.getReferralsBonus())
          dispatch(AccountActionCreator.getAvailableRewards())
          dispatch(AccountActionCreator.getTotalTicketsBought())
        }
        setSeconds(1);
      } else if (seconds > Config().HEARTBEAT_RATE) {
        setSeconds(0)
      } else setSeconds(seconds + 1)
    }, 1000)

    return () => clearInterval(interval);
  }, [seconds])

  useEffect(() => {
    if (isNeedToUpdate) {
      setBuyModalShow(false)
      setBoughtModalShow(true)
      if (!!walletAddress) {
        dispatch(AccountActionCreator.getUpline())
        dispatch(ApplicationActionCreator.getAccountMaticBalance())
        dispatch(ApplicationActionCreator.getAccountTokenBalance())
        dispatch(AccountActionCreator.getUserWinnings())
        dispatch(AccountActionCreator.getReferralsBonus())
        dispatch(AccountActionCreator.getAvailableRewards())
      }
      dispatch(ApplicationActionCreator.setIsNeedToUpdate(false))
    }
  }, [isNeedToUpdate])

  useEffect(() => {
    if (notCorrectChain) {
      dispatch(ApplicationActionCreator.setToastData({
        text: <>Change your chain to a correct one.</>,
        description: <>Not correct chain.</>
      }))

    }
    if (!!walletAddress && !notCorrectChain) {
      setSeconds(0)
    }
  }, [walletAddress, notCorrectChain])

  useEffect(() => {
    // Function to handle wallet change event
    const handleAccountsChanged = (accounts) => {
      dispatch(ApplicationActionCreator.setWalletAddress(accounts[0]))
      console.log('Active wallet changed:', accounts);
    };

    const handleChainChanged = (chainId) => {
      const newChainId = Number(chainId)
      console.log(newChainId, Config().CHAIN_ID)
      if (newChainId === Config().CHAIN_ID) {
        dispatch(ApplicationActionCreator.setNotCorrectChain(false))
      } else dispatch(ApplicationActionCreator.setNotCorrectChain(true))
    }

    // Check if MetaMask is available
    if (typeof window.ethereum !== 'undefined') {
      // Subscribe to wallet change events
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    // Clean up the subscription on component unmount
    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const setToastData = (data) => {
    dispatch(ApplicationActionCreator.setToastData(data))
  }

  return (
    <ConfigContext.Provider value={{ buyModalShow, setBuyModalShow, boughtModalShow, setBoughtModalShow }}>
      <ToastifyContext.Provider value={{ toastData, setToastifyData: setToastData }}>
        <HashRouter>
          <WagmiConfig config={wagmiConfig}>
            <Header setIsMenu={setIsMenu} />
            <ApplicationRoutes projectId={projectId} ethereumClient={ethereumClient} />
            {isMenu && <MobileMenu setIsMenu={setIsMenu} />}
            {buyModalShow && <BuyTicket />}
            {boughtModalShow && <BoughtModal />}
            <Toastify />
            <Footer />
          </WagmiConfig>
        </HashRouter>
      </ToastifyContext.Provider>
    </ConfigContext.Provider>
  );
}

export default App;
