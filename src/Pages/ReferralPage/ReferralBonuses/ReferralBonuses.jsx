import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"

const tableList = [
  { wallet: '1234567890', level: 1, ticketsBought: 10, commision: 100000 },
  { wallet: '1234567890', level: 1, ticketsBought: 10, commision: 100000 },
  { wallet: '1234567890', level: 1, ticketsBought: 10, commision: 100000 }
]



export const ReferralBonuses = () => {
  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <h1 className='font-inter800 text-7xl mb-24 text-white'>
        Experience the benefits
      </h1>
      <div className='bg-blue p-10 rounded-2xl'>
        <table className='w-full table-fixed border-collapse'>
          <thead className='text-gold text-4xl font-poppins600'>
            <tr>
              <th>Wallet number</th>
              <th>Level</th>
              <th>Tickets bought</th>
              <th>Your comission</th>
            </tr>
          </thead>
          <tbody className=''>
            {tableList.map(el => <TableElement {...el} />)}
          </tbody>
        </table>
      </div>
      <div className='text-center w-full mt-10'>
        <p className='font-poppins400 text-4xl text-description mb-8'>Сonnect wallet to check your referrals</p>
        <ConnectWallet />
      </div>

    </div>
  )
}

const TableElement = (props) => {

  return (
    <tr className='text-3xl text-center font-poppins400 relative text-description after__tr_line'>
      <td className='pb-2 pt-10'>{props.wallet}</td>
      <td>{props.level}</td>
      <td>{props.ticketsBought}</td>
      <td >{props.commision} USDT</td>
    </tr>
  )
}
