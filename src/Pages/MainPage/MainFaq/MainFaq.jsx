import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ReactComponent as Arrow } from 'Assets/arrow.svg'
import { ReactComponent as ArrowDown } from 'Assets/downArrow.svg'
import { isVisible } from "@testing-library/user-event/dist/utils"

const faqTiles = [
  {
    title: `What is CHAINLOTTO?`,
    description: `CHAINLOTTO is a decentralized lottery operating on the Polygon Network,
        featuring a 3-level referral program.
        It is powered by a smart contract, ensuring transparency
        and fairness throughout the lottery process.`
  },
  {
    title: `Do I need to sign up?`,
    description: `No, there is no need to sign up or provide any personal data. You will need to connect your wallet to the CHAINLOTTO site to purchase lottery tickets, obtain your referral link, participate in draws, and claim your winnings.`
  },
  {
    title: `How much does a lottery ticket cost?`,
    description: `Each lottery ticket requires a minimum of 10 USD. The best part is that you can pay with any cryptocurrency of your choice. We have integrated a third-party external app that enables our users to pay in their preferred currency on any blockchain. The app seamlessly converts the chosen cryptocurrency to USDT on the Polygon network.`
  },
  {
    title: `How do I buy a lottery ticket?`,
    description: `To buy a lottery ticket, simply click on the "BUY TICKET NOW!" button. You will then be prompted to connect your wallet to the lottery site. Once the connection is established, you can proceed to select the number of tickets you wish to purchase. Please note that each lottery ticket requires a minimum of 10 USD. Additionally, ensure that you have approximately 0.01 BNB in your wallet to cover the transaction fee. If you do not have sufficient BNB, the transaction will not be processed.`
  },
  {
    title: `Where can I check the results?`,
    description: `To check the results, simply click on the "Check your results" tab located in the header of the lottery page. This action will open a pop-up window displaying your results. Please note that you need to connect your wallet to view the results. If you encounter the message "Coming Soon," it indicates that the draw has not yet taken place. By clicking on "Coming Soon," you will be directed to our smart contract to view all transactions.`
  },
  {
    title: `How can I claim my winnings?`,
    description: `To claim your winnings, go to the "Check your results" tab in the header of the lottery page. Connect your wallet to view the results and proceed to claim your prize. If you are a winner, you will see a button labeled "CLAIM YOUR REWARD NOW!" active. Simply click the button to receive your well-deserved reward. Please ensure that you have a small amount of BNB in your wallet to cover the transaction fees on the blockchain.`
  },
  {
    title: `How do I know if my wallet participated in the draw?`,
    description: `Scroll down to the "Winning wallets" section of the web site main menu. There, you can see both the winning wallets and the wallets that participated in the draw. Click on the Polygon Scan to view more details.`
  },
  {
    title: `Where can I find my referral link?`,
    description: `To find your referral link, click on the "Referral Program" tab in the header of the lottery page. Once you connect your wallet, you'll see your referral link. You can share it on social media with a single click of a button.`
  },
  {
    title: `How can I receive my referral bonuses?`,
    description: `All referral commissions are directly sent to your wallet, and the gas fee for all transactions is covered by the buyer of the lottery ticket. You will receive 1 USDT for every ticket purchased by people in your referral structure, up to the 3rd line.`
  },
]

export const MainFaq = () => {

  const mainFaqRef = useRef()
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  }, [])

  const options = useMemo(() => ({
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed
  }), [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (mainFaqRef.current) {
      observer.observe(mainFaqRef.current);
    }

    return () => {
      if (mainFaqRef.current) {
        observer.unobserve(mainFaqRef.current);
      }
    };
  }, []);

  return (
    <div ref={mainFaqRef} className={`mt-10 sm:mt-20 max-w-screen-mmx mx-auto px-4 mmx:px-0 sm:px-24 after__block_line`}>
      <h1 className='font-inter800 text-5xl sm:text-7xl mb-10 sm:mb-24 text-white'>
        FAQ
      </h1>
      <div className='mb-16 flex flex-col sm:gap-y-8 gap-y-5'>
        {faqTiles.map(el => <FaqTile {...el} />)}
      </div>
    </div >
  )
}

const FaqTile = (props) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div
      onClick={() => setIsOpened(!isOpened)}
      className='flex flex-col justify-between items-center bg-blue px-5 py-8 sm:px-8 sm:pt-8 sm:pb-10 cursor-pointer rounded-2xl'>
      <div className='flex items-center justify-between w-full'>
        <h3 className='text-2xl sm:text-3xl font-poppins400 text-title'>{props.title}</h3>
        <div>
          {isOpened ? <Arrow className='sm:w-20 sm:h-20 w-8 h-8' /> : <ArrowDown className='sm:w-20 sm:h-20 w-8 h-8' />}
        </div>
      </div>
      {isOpened && <p className='mt-5 text-xl font-poppins400 text-description'>
        {props.description}
      </p>}
    </div >

  )
}
