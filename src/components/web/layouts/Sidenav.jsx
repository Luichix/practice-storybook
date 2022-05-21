import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdPhonePortrait } from 'react-icons/io'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaBusinessTime } from 'react-icons/fa'
import { GiVirtualMarker } from 'react-icons/gi'
import {  MdPayment, MdOutlineReportProblem, MdOutlineIntegrationInstructions } from 'react-icons/md'
import style from '../../styles/modules/sidenav.module.css'
import { useSelector } from 'react-redux'

const Sidenav = ({ nav, setNav }) => {
  const info = useSelector(state => state.user)
  const handleNav = () => {
    if(nav) setNav(false)
  }

  const group = {
    Account: [
      ['Personal Info', '/personal-info', <IoMdPhonePortrait key={'phone'}/>],
      ['Security', '/security', <MdOutlineSecurity key={'security'} /> ]
    ] ,
    Suscription: [
      ['Assistant', '/virtual-assistant', <GiVirtualMarker key={'marker'} />],
      ['Reports', '/reports', <MdOutlineReportProblem key={'problem'}/>],
      ['Bussines', '/business', <FaBusinessTime key={'bussines'} />],
      ['Integration', '/integration', <MdOutlineIntegrationInstructions key={'integration'} />]
    ],
    Billing: [
      ['Payment', '/payment', <MdPayment key={'payment'} />]
    ]
  }
  return (
    <div  className={nav ? style.sidenav : style.none}>
      <div className=" w-full flex items-center justify-center pt-6 flex-col ">
        <div className=" h-32 w-32 rounded-full">
          <img
            src={info.photoURL}
            style={{ width: '100%', heigth: '100%', objectFit: 'cover', borderRadius: '50%' }}
            alt=""
          />
        </div>
        <h1 className=" text-lg pt-3 font-medium text-gray-800">{info.name}</h1>
        <p className=" text-gray-500 -mt-1 text-sm">{info.email}</p>
      </div>
      <div className=" w-full pt-9  ">
        {
          Object.keys(group).map((item, index) => {
            return (
              <div key={index} className='py-2'>
                <h4 className="uppercase text-gray-700 text-sm font-semibold pb-1">
                  {item}
                </h4>
                {
                  group[item].map((subItem, index) => {
                    return (
                      <div key={index} className='w-full border-l-4 flex items-center h-9 border-white hover:border-pr' >
                        <Link to={subItem[1]} onClick={handleNav}>
                          <div className='pl-4 text-gray-600 hover:text-pr  flex items-center gap-2  text-sm w-full'>
                            {subItem[2]}
                            {subItem[0]}
                          </div>
                        </Link>
                      </div>
                    )})
                }
              </div>
            )})
        }
      </div>

    </div>
  )
}

export default Sidenav