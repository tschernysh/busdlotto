import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { MainChance } from "./MainChance/MainChance"
import { MainFaq } from "./MainFaq/MainFaq"
import { MainReferral } from "./MainReferral/MainReferral"
import { MainTitle } from "./MainTitle/MainTitle"
import { MainWhy } from "./MainWhy/MainWhy"
import { MainWinning } from "./MainWinning/MainWinning"

export const MainPage = () => {

  const { ref } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log(ref)
    localStorage.setItem("refAddress", ref);
  }, [ref])

  return (
    <div className='main__background '>
      <MainTitle />
      <MainReferral />
      <MainWinning />
      <MainChance />
      <MainWhy />
      <MainFaq />
    </div>
  )
}
