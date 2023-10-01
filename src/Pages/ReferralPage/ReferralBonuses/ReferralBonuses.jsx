import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const ReferralBonuses = () => {
  const { referralsBonus, referralsBonusPages, referralCurrentPage } = useSelector(state => state.accountReducer)
  const dispatch = useDispatch()
  const [paginationValue, setPaginationValue] = useState([])
  const pagination = Math.ceil(referralsBonusPages / 10)

  const setInitialPagination = (pagination) => {
    let initialPagination = []
    for (let i = 1; i <= pagination; i++) {
      if (i === 7) {
        initialPagination.push(pagination)
        setPaginationValue(initialPagination)
        return
      }
      if (i === pagination) {
        initialPagination.push(pagination)
        setPaginationValue(initialPagination)
        return
      }
      if (i === 6) {
        initialPagination.push(pagination === 7 ? i : '...')
      } else {
        initialPagination.push(i)
      }
    }
  }

  useEffect(() => {
    setInitialPagination(pagination)
  }, [pagination])

  const handleChangePage = (page) => {
    dispatch()
  }

  useEffect(() => {
    if (pagination === 7) {
      return
    } else if (referralCurrentPage === pagination) {
      if (referralCurrentPage < 7) {
        return
      } else {
        setPaginationValue([1, '...', referralCurrentPage - 5, referralCurrentPage - 4, referralCurrentPage - 3, referralCurrentPage - 2, referralCurrentPage - 1, referralCurrentPage])
      }
    } else if (referralCurrentPage === 1) {
      setInitialPagination(pagination)
    } else if (pagination - 5 < referralCurrentPage) {
      referralCurrentPage === pagination - 4 && setPaginationValue([1, '...', referralCurrentPage - 1, referralCurrentPage, referralCurrentPage + 1, referralCurrentPage + 2, referralCurrentPage + 3, pagination])
      referralCurrentPage === pagination - 3 && setPaginationValue([1, '...', referralCurrentPage - 2, referralCurrentPage - 1, referralCurrentPage, referralCurrentPage + 1, referralCurrentPage + 2, pagination])
    } else if (referralCurrentPage > 4) {
      setPaginationValue([1, '...', referralCurrentPage - 2, referralCurrentPage - 1, referralCurrentPage, referralCurrentPage + 1, referralCurrentPage + 2, '...', pagination])
    } else if (referralCurrentPage <= 4) {
      referralCurrentPage === 4 && setPaginationValue([1, referralCurrentPage - 2, referralCurrentPage - 1, referralCurrentPage, referralCurrentPage + 1, '...', pagination])
      referralCurrentPage === 3 && setPaginationValue([referralCurrentPage - 2, referralCurrentPage - 1, referralCurrentPage, referralCurrentPage + 1, referralCurrentPage + 2, '...', pagination])
    }
  }, [referralCurrentPage])

  return (
    <div className='mt-20 max-w-screen-mmx mx-auto '>
      <h1 className='font-inter800 text-5xl sm:text-7xl px-4 sm:px-0 mb-24 text-white'>
        Experience the benefits
      </h1>
      <div className='bg-blue p-10 sm:rounded-2xl'>
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
            {referralsBonus.map(el => <TableElement {...el} />)}
          </tbody>
        </table>
        <div>
          {paginationValue.map(el => {
            return <span
              onClick={() => el !== '...' && handleChangePage(el)}
              className={`w-5 h-5 lg:w-8 lg:h-8 cursor-pointer flex justify-center items-center ${referralCurrentPage === el ? 'bg-lightYellow text-black rounded-md' : 'text-title'}`}
            >
              {el}
            </span>
          })}
        </div>
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
