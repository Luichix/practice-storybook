import React from 'react'
const Footer = () => {
  return (
    <div className=" w-full  shadow-md py-5" style={{ background:'#21325B' }}>
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
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
              <p className=" text-pr">lgordillo@go-digit.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
