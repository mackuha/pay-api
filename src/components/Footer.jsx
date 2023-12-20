import React, { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import Button from "./ui/Button"
import ScheduleInlineForm from "./ui/ScheduleInlineForm"
import circleBg from "/shared/bg-pattern-circle.svg"
import facebookLogo from "/shared/facebook.svg"
import twitterLogo from "/shared/twitter.svg"
import linkedinLogo from "/shared/linkedin.svg"
import logo from "/shared/logo-white.svg"

function Footer() {
  return (
    <>
      <div className="pb-20">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center lg:flex-row lg:text-left">
          <h2 className="lg:w-6/12 xl:w-7/12">Ready to Start?</h2>
          <div className="mt-6 w-full md:mx-auto md:w-3/4 lg:mt-0 lg:w-6/12 xl:w-5/12">
            <ScheduleInlineForm />
          </div>
        </div>
      </div>
      <footer className="relative z-10 overflow-hidden bg-black pt-10">
        <div className="container mx-auto flex flex-col items-center px-6 pb-10 md:flex-row md:justify-between">
          <div className="items-center justify-center md:flex md:gap-16">
            <Link to="/" className="transition-opacity hover:opacity-50">
              <img src={logo} alt="PayAPI logo" className="w-44 md:w-auto" />
            </Link>
            <nav className="mt-10 flex flex-col gap-8 text-center font-bold text-blue-700 md:mt-0 md:flex-row md:gap-10">
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
          <div className="mt-10 flex gap-6 md:mt-0">
            <img
              src={facebookLogo}
              alt="Facebook logo"
              className="cursor-pointer transition-all hover:opacity-50"
            />
            <img
              src={twitterLogo}
              alt="Twitter logo"
              className="cursor-pointer transition-all hover:opacity-50"
            />
            <img
              src={linkedinLogo}
              alt="LinkedIn logo"
              className="cursor-pointer transition-all hover:opacity-50"
            />
          </div>
        </div>
        <img
          src={circleBg}
          alt="Background pattern circle"
          className="absolute -bottom-[600px] left-1/2 -z-10 w-[780px] max-w-none -translate-x-1/2 md:-right-[1000px] md:translate-x-0"
        />
      </footer>
      <div className="bg-[#101317] py-4 text-center text-black">
        <div className="container mx-auto px-6">
          <p className="text-xs leading-normal">
            Challenge by{" "}
            <Link
              to="https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e"
              target="_blank"
              className="font-bold transition-all hover:text-pink-500"
            >
              Frontend Mentor.
            </Link>{" "}
            Coded by{" "}
            <Link
              to="https://github.com/mackuha"
              target="_blank"
              className="font-bold transition-all hover:text-pink-500"
            >
              Marc Fernand Dimacuha
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
