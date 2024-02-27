import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full flex font-semibold justify-between shadow-lg bg-slate-200 text-gray-700 p-3 sm:px-16">
        <Link to="/" className="text-3xl font-bold text-black">Car-on-Rent</Link>
        <div className="flex content-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <Link to="/login" className="p-1"> Login </Link> 
          <span className="p-1">/</span>
          <Link to="/signup" className="p-1"> Signup</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar