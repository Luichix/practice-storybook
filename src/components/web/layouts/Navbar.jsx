import React, { useState, useContext } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import AuthContext from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { texts, handleLanguage } = useContext(LanguageContext)
  const user = useContext(AuthContext)

  return (
    <div className=" w-full sticky top-0 left-0 z-50 shadow-sm bg-white">
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="lg:grid grid-cols-2 hidden">
            <div className=" w-full">
              <div className=" h-20 w-32">
                <img
                  src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/logos/logo.svg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center gap-8 justify-center text-gray-500">
              <Link to="/"className=" hover:text-pr">{texts.home}</Link>
              <Link to="/"className=" hover:text-pr">{texts.price}</Link>
              <Link to="/"className=" hover:text-pr">{texts.product}</Link>
              {
                user ?
                  <Link to="/personal-info"className=" hover:text-pr">Dashboard</Link>
                  :
                  <>
                    <Link to="/login"className=" hover:text-pr">{texts.login}</Link>
                    <Link to="/signup"className="  bg-pr text-white py-2 px-3 rounded-md" >{texts.register}</Link>
                  </>
              }
              <select name='language' onChange={handleLanguage} className='text-gray-500 outline-none' >
                <option value='en'>EN</option>
                <option value='es'>ES</option>
              </select>

            </div>
          </div>
          {/* mobile version */}
          <div className=" lg:hidden grid-cols-1 grid">
            <div className=" w-full flex items-center justify-between pr-4">
              <div className=" h-20 w-32">
                <img
                  src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/logos/logo.svg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  alt=""
                />
              </div>
              {
                open === false ? <FaBars onClick={() => setOpen(true)} className="w-8 h-8 cursor-pointer text-pr"/>:  <AiOutlineClose onClick={() => setOpen(false)} className="w-8 h-8 cursor-pointer text-pr"/>
              }

            </div>
            {
              open && <div className=" grid grid-cols-2 items-center gap-2 justify-center text-gray-500 pb-3">
                <Link to="/"className=" hover:text-pr">Home</Link>
                <Link to="/"className=" hover:text-pr">Pricing</Link>
                <Link to="/"className=" hover:text-pr">Products</Link>
                {
                  user ?
                    <Link to="/personal-info"className=" hover:text-pr">Dashboard</Link>
                    :
                    <>
                      <Link to="/login" className=" hover:text-pr">Login</Link>
                      <Link to="/signup" className=" col-span-2 text-center  bg-pr text-white py-2 px-3 rounded-md">Register</Link>
                    </>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
