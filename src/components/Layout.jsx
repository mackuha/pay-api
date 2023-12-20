import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const homepage = "/"

  if (pathname === homepage) {
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
