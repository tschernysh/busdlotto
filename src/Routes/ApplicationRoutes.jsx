import { Route, Routes } from "react-router-dom"
import { MainPage } from "Pages/MainPage/MainPage"
import { WorkPage } from "Pages/WorkPage/WorkPage"


export const ApplicationRoutes = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/works' element={<WorkPage />} />
      </Routes>
    </>
  )
}
