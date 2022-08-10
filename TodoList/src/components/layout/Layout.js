import React from 'react'
import Home from '../screens/Home/Home'

const Layout = ({children}) => {
  return (
    <div className=' py-10 bg-gray-900 h-screen'>
        {/* {children} */}
        <Home/>

    </div>
  )
}

export default Layout