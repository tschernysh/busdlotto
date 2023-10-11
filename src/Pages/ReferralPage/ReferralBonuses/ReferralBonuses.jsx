import { ConnectWallet } from "Components/ConnectWallet/ConnectWallet"
import { Config } from "config"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Arrow } from 'Assets/arrow.svg'

export const ReferralBonuses = () => {
  const { referralsBonusPages, referralsBonus } = useSelector(state => state.accountReducer)
  const dispatch = useDispatch()
  const [paginationValue, setPaginationValue] = useState([])
  const [referralCurrentPage, setReferralCurrentPage] = useState(1)
  const pagination = Math.ceil(referralsBonus.length / Config().BONUS_PAGE_ITEMS)

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
    console.log(page)
    setReferralCurrentPage(page)
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
        Check your referral bonuses
      </h1>
      <div className='bg-blue px-4 py-12 sm:p-10 sm:rounded-2xl'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full sm:table-fixed border-collapse'>
            <thead className='text-gold text-2xl sm:text-4xl font-poppins600'>
              <tr className='whitespace-nowrap'>
                <th className='pr-8 sm:pr-0'>Wallet number</th>
                <th className='px-8 sm:px-0'>Level</th>
                <th className='px-8 sm:px-0'>Tickets bought</th>
                <th className='pl-8 sm:pl-0'>Your comission</th>
              </tr>
            </thead>
            <tbody className=''>
              {referralsBonus.slice((referralCurrentPage - 1) * Config().BONUS_PAGE_ITEMS, (referralCurrentPage - 1) * Config().BONUS_PAGE_ITEMS + Config().BONUS_PAGE_ITEMS).map(el => <TableElement {...el} />)}
            </tbody>
          </table>
        </div>
        {
          referralsBonus.length && <div className='flex items-center justify-center mt-16 gap-x-11'>
            <div>
              <Arrow
                onClick={() => referralCurrentPage - 1 !== 0 && handleChangePage(referralCurrentPage - 1)}
                className='pagination__arrow transform -rotate-90 cursor-pointer w-6 h-6' />
            </div>
            <div className='flex items-center gap-x-7 justify-center '>
              {paginationValue.map(el => {
                return <span
                  onClick={() => el !== '...' && handleChangePage(el)}
                  className={`w-5 h-5 lg:w-8 lg:h-8 cursor-pointer flex justify-center items-center ${referralCurrentPage === el ? 'bg-white text-gold rounded-full' : 'text-title'}`}
                >
                  {el}
                </span>
              })}
            </div>
            <div>
              <Arrow
                onClick={() => referralCurrentPage + 1 <= pagination && handleChangePage(referralCurrentPage + 1)}
                className='pagination__arrow transform rotate-90 cursor-pointer w-6 h-6' />
            </div>
          </div>
        }
      </div>
      <div className='text-center w-full mt-10'>
        <p className='font-poppins400 text-2xl sm:text-4xl text-description mb-8'>Сonnect wallet to check your referrals</p>
        <ConnectWallet />
      </div>

    </div>
  )
}

const TableElement = (props) => {

  return (
    <>
      <tr className='text-xl sm:text-3xl text-center font-poppins400 relative text-description '>
        <td className='pb-2 pt-10'>{props.wallet}</td>
        <td className='pb-2 pt-10'>{props.level}</td>
        <td className='pb-2 pt-10'>{props.ticketsBought}</td>
        <td className='pb-2 pt-10'>{props.commision} USDT</td>
      </tr>
      <tr className='after__tr_line'>
        <td colSpan='4'>
          <span></span>
        </td>
      </tr>
    </>
  )
}
