import logo from './logo.svg';
import 'App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'Components/Header/Header';
import { Footer } from 'Components/Footer/Footer';
import { ApplicationRoutes } from 'Routes/ApplicationRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { initWagmi } from 'utils/initWagmi';
import { WagmiConfig } from 'wagmi';
import { ApplicationActionCreator } from 'store/reducers/application/action-creator';
import { Config } from 'config';
import { ConfigContext } from 'applicationContext';
import { BuyTicket } from 'Modals/BuyTicket';
import { BoughtModal } from 'Modals/BoughtModal';
import { AccountActionCreator } from 'store/reducers/account/action-creator';

function App() {
  const dispatch = useDispatch()
  const {
    walletAddress, isNeedUpdate, notCorrectChain
  } = useSelector(state => state.applicationReducer)
  const [seconds, setSeconds] = useState(0)
  const [wagmiConfig, setWagmiConfig] = useState()
  const [ethereumClient, setEthereumClient] = useState()
  const [projectId, setProjectId] = useState()
  const [buyModalShow, setBuyModalShow] = useState(false)
  const [boughtModalShow, setBoughtModalShow] = useState(false)


  useMemo(() => {
    const { wagmiConfig, ethereumClient, projectId } = initWagmi()

    setWagmiConfig(wagmiConfig)
    setEthereumClient(ethereumClient)
    setProjectId(projectId)
  }, [])

  useEffect(() => {
    dispatch(ApplicationActionCreator.getLastWinners())
    dispatch(ApplicationActionCreator.getCurrentTicketIndex())
    if (walletAddress) {
      dispatch(AccountActionCreator.getUpline())
      dispatch(ApplicationActionCreator.getAccountMaticBalance())
      dispatch(ApplicationActionCreator.getAccountTokenBalance())
      dispatch(AccountActionCreator.getUserWinnings())
      dispatch(AccountActionCreator.getReferralsBonus())
    }
    //dispatch(ApplicationActionCreator.getDefaultReferrer())
  }, [walletAddress])



  /*
  useEffect(() => {
    let interval
    interval = setInterval(() => {
      if (!seconds) {
        if (notCorrectChain) return

        if (!!walletAddress) {
        }
        setSeconds(1);
      } else if (seconds > Config().HEARTBEAT_RATE) {
        setSeconds(0)
      } else setSeconds(seconds + 1)
    }, 1000)

    return () => clearInterval(interval);
  }, [seconds])
*/

  useEffect(() => {
    if (isNeedUpdate) {
      setBuyModalShow(false)
      setBoughtModalShow(true)
      if (!!walletAddress) {
      }
      dispatch(ApplicationActionCreator.setIsNeedUpdate(false))
    }
  }, [isNeedUpdate])

  useEffect(() => {
    if (notCorrectChain) alert('Connect to another supported chain')
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
      if (chainId !== Config().CHAIN_ID) {
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

  return (
    <ConfigContext.Provider value={{ buyModalShow, setBuyModalShow, boughtModalShow, setBoughtModalShow }}>
      <BrowserRouter>
        <WagmiConfig config={wagmiConfig}>
          <Header />
          <ApplicationRoutes projectId={projectId} ethereumClient={ethereumClient} />
          {buyModalShow && <BuyTicket />}
          {boughtModalShow && <BoughtModal />}
          <Footer />
        </WagmiConfig>
      </BrowserRouter>
    </ConfigContext.Provider>
  );
}

export default App;
