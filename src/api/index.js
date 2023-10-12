import axios from "axios";
import { Config } from "config";


const api = axios.create({
  baseUrl: Config().THEGRAPH_URL,
})

export const getLastWinners = async () => {
  const query = `
{
  wonDrawns(first: 5, orderBy: timestamp, orderDirection: desc) {
    id
    amount
    winner
    timestamp
    blockNumber
    blockTimestamp
    transactionHash
  }
}`;

  const res = await api.post(Config().THEGRAPH_URL, {
    query: query
  })

  return res.data.data

}

export const getUserWinnings = async (userAddress) => {
  const query = `
{
  wonDrawns(where: {winner: "${userAddress}" }) {
    amount
  }
}`;

  const res = await api.post(Config().THEGRAPH_URL, {
    query: query
  })

  return res.data.data
}

export const getCurrentTicketIndex = async () => {
  const query = `
{
  ticketBoughts(first: 1, orderBy: timestamp, orderDirection: desc) {
    toTicket
  }
}`;

  const res = await api.post(Config().THEGRAPH_URL, {
    query: query
  })

  return res.data.data
}

export const getReferralsBonus = async (userAddress) => {
  const query = `
{
  referralBonusGranteds(first: 1000, where: {referral: "${userAddress}"}, orderBy: blockTimestamp, orderDirection: desc ) {
    buyer
    level
    numberOfTickets
    rewardPerRefferer
    blockTimestamp
  }
}
`;

  const res = await api.post(Config().THEGRAPH_URL, {
    query: query
  })

  return res.data.data
}

export const getTotalUserTicketsBought = async (userAddress) => {
  const query = `
    {
      ticketBoughts(where: {buyer: "${userAddress}"}) {
        amount
      }
    }
  `

  const res = await api.post(Config().THEGRAPH_URL, {
    query: query
  })

  return res.data.data
}
