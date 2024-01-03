import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <React.Fragment>
      <div>
        {/* Top Section / Navigation of the website */}
        <Header/>
        {/* Actual Navigation of the site / Pages Preview */}
        <Outlet/>
        {/* Footer */}
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Layout