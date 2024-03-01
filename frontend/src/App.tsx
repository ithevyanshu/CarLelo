import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { RecoilRoot } from 'recoil'
import { CarDetail } from './components/CarDetail'

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/car-information' element={<CarDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
