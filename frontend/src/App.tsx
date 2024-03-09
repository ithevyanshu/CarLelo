import './App.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import AllAgreement from './pages/All-Agreement'
import CarDetail from './pages/CarDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Agreement from './pages/Agreement'
import EditCar from './pages/EditCar'
import EditAgreement from './pages/EditAgreement'
import ReturnRequest from './pages/ReturnRequest'
import AddCar from './pages/AddCar'

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path='/' element={<Layout />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/agreements' element={<AllAgreement />} />
              <Route path='/dashboard/car-details/:id' element={<CarDetail />} />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/signup' element={<Signup />} />
              <Route path='/user/agreements/:id' element={<Agreement />} />
              <Route path='/admin/add-car' element={<AddCar />} />
              <Route path='/admin/edit-car/:id' element={<EditCar />} />
              <Route path='/admin/edit-agreements/:id' element={<EditAgreement />} />
              <Route path='/admin/return-request' element={<ReturnRequest />} />
              <Route path='*' element={<div className='p-16'>Not Found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
