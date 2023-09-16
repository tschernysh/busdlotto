import { Route, Routes } from "react-router-dom"
import { MainPage } from "Pages/MainPage/MainPage"
import { WorkPage } from "Pages/WorkPage/WorkPage"
import { ReferralPage } from "Pages/ReferralPage/ReferralPage"
import { ResultsPage } from "Pages/ResultsPage/ResultsPage"


export const ApplicationRoutes = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/works' element={<WorkPage />} />
        <Route path='/referral' element={<ReferralPage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </>
  )
}
