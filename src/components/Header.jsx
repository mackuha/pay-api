import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "/shared/logo.svg"
import menu from "/shared/icon-menu.svg"
import closeBtn from "/shared/icon-close.svg"
import Button from "./ui/Button"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <header className="container mx-auto px-6">
      <div className="flex items-center justify-between py-10">
        <div className="flex items-center gap-16">
          <Link to="/" className="transition-opacity hover:opacity-50">
            <img src={logo} alt="PayAPI main logo" />
          </Link>
          <nav className="hidden space-x-10 font-bold text-blue-700 md:block">
            <NavLink
              to="pricing"
              className="transition-all hover:text-pink-500 hover:opacity-100"
            >
              Pricing
            </NavLink>
            <NavLink
              to="about"
              className="transition-all hover:text-pink-500 hover:opacity-100"
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className="transition-all hover:text-pink-500 hover:opacity-100"
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <button
          onClick={toggleMenu}
          className="transition-opacity hover:opacity-50 md:hidden"
        >
          <img src={menu} alt="Hamburger menu icon" />
        </button>
        <Link to="contact" className="hidden md:block">
          <Button>Schedule a Demo</Button>
        </Link>
      </div>
      {menuOpen && (
        <div className="fixed right-0 top-0 z-50 h-screen w-screen overflow-hidden">
          <div
            onClick={toggleMenu}
            className="fixed right-0 top-0 h-screen w-screen cursor-pointer overflow-hidden"
          ></div>
          <div className="container absolute right-0 top-0 mx-auto h-full w-10/12 bg-black px-6 pt-12 text-white md:hidden">
            <button className="w-full transition-opacity hover:opacity-50">
              <img
                src={closeBtn}
                alt="Close menu icon"
                onClick={toggleMenu}
                className="ml-auto"
              />
            </button>
            <div className="mt-6 h-[1px] w-full bg-blue-100 opacity-10"></div>
            <nav className="mt-10 flex flex-col items-center gap-8 text-xl font-bold opacity-70">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="w-full text-center transition-all hover:text-pink-500 hover:opacity-100"
              >
                Home
              </NavLink>
              <NavLink
                to="pricing"
                onClick={toggleMenu}
                className="w-full text-center transition-all hover:text-pink-500 hover:opacity-100"
              >
                Pricing
              </NavLink>
              <NavLink
                to="about"
                onClick={toggleMenu}
                className="w-full text-center transition-all hover:text-pink-500 hover:opacity-100"
              >
                About
              </NavLink>
              <NavLink
                to="contact"
                onClick={toggleMenu}
                className="w-full text-center transition-all hover:text-pink-500 hover:opacity-100"
              >
                Contact
              </NavLink>
            </nav>
            <NavLink
              to="contact"
              onClick={toggleMenu}
              className="mt-8 block w-full"
            >
              <Button className="w-full">Schedule a Demo</Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
