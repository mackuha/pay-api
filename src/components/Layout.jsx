import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import circleBg from "/shared/bg-pattern-circle.svg"
import { Outlet, useLocation } from "react-router-dom"

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <div className="relative overflow-hidden">
      {pathname !== "/" ? (
        <img
          src={circleBg}
          alt="Background pattern circle"
          className="absolute -right-[200px] -top-[260px] -z-10 md:-right-[450px] md:-top-[550px] lg:-right-[300px] lg:-top-[560px]"
        />
      ) : null}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
