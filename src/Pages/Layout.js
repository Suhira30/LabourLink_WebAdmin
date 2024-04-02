import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
export const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      {/* Main content goes here */}
    </div>
    <Footer />
  </div>
  )
}
