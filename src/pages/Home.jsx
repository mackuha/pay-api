import React, { useState } from "react"
import phoneMockup from "/home/illustration-phone-mockup.svg"
import circleBg from "/shared/bg-pattern-circle.svg"

import easyToImplementImg from "/home/illustration-easy-to-implement.svg"
import simpleUiImg from "/home/illustration-simple-ui.svg"
import financesIcon from "/home/icon-personal-finances.svg"
import bankingIcon from "/home/icon-banking-and-coverage.svg"
import paymentsIcon from "/home/icon-consumer-payments.svg"
import CompanyLogos from "../components/CompanyLogos"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom"

function Home() {
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setEmail("")
  }

  return (
    <div>
      <div className="relative overflow-x-clip">
        <div className="container mx-auto flex flex-col items-center px-6 pb-20 lg:flex-row-reverse lg:pb-10">
          <div className="lg:w-1/2">
            <img
              src={phoneMockup}
              alt="Phone mockup of the app"
              className="mx-auto -mt-12 w-[300px] xl:w-[450px]"
            />
          </div>
          <div className="-mt-7 text-center md:-mt-4 lg:mt-0 lg:w-1/2 lg:text-left">
            <h1 className="text-[32px] leading-9 md:mx-auto md:w-3/4 md:text-5xl md:leading-[56px] lg:w-full xl:text-[72px] xl:leading-[72px]">
              Start building with our APIs for absolutely free.
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-4 md:mx-auto md:w-3/4 md:flex-row md:gap-0 lg:ml-0 lg:mt-8 lg:w-10/12"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required
                placeholder="Enter email address"
                className="w-full rounded-full py-4 pl-5 font-bold text-blue-900 shadow-xl"
              />
              <Button className="w-full shadow-xl md:-ml-10 md:w-auto">
                Schedule a Demo
              </Button>
            </form>
            <p className="mt-6 lg:mt-4">
              Have any questions?{" "}
              <Link
                to="contact"
                className="font-bold transition-opacity hover:text-pink-500"
              >
                Contact Us
              </Link>
            </p>
          </div>
          <img
            src={circleBg}
            alt="Background pattern circle"
            className="absolute -top-[600px] left-1/2 -z-10 w-[780px] max-w-none -translate-x-1/2 md:-top-[800px] md:w-[980px] lg:-right-[700px] lg:-top-[500px] lg:left-auto lg:w-[780px] xl:-right-[550px] xl:-top-[300px]"
          />
        </div>
      </div>
      <div className="relative overflow-hidden bg-black py-20">
        <div className="container mx-auto flex flex-col gap-14 px-6 lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/2">
            <CompanyLogos color="light" />
          </div>
          <div className="z-10 text-center lg:w-1/2 lg:text-left xl:pr-20">
            <h2 className="text-white">Who we work with</h2>
            <p className="mt-4 text-white opacity-70">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <Link to="about" className="mt-8 inline-block">
              <Button variant="outline_dark">About Us</Button>
            </Link>
          </div>
        </div>
        <img
          src={circleBg}
          alt="Background pattern circle"
          className="absolute -top-[600px] left-1/2 w-[780px] max-w-none -translate-x-1/2 lg:-top-[400px] lg:left-[100px]"
        />
      </div>
      <div className="py-20">
        <div className="container mx-auto space-y-20 px-6">
          <div className="flex flex-col items-center lg:flex-row">
            <img
              src={easyToImplementImg}
              alt="Code snippet illustration"
              className="mx-auto -mt-12 md:w-[500px] lg:w-1/2"
            />
            <div className="-mt-3 text-center md:-mt-10 lg:w-1/2 lg:pr-24 lg:text-left">
              <h2>Easy to implement</h2>
              <p className="mt-4">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center lg:flex-row-reverse">
            <img
              src={simpleUiImg}
              alt="Code snippet illustration"
              className="mx-auto -mt-12 md:w-[400px] lg:w-1/2"
            />
            <div className="text-center md:-mt-4 lg:mt-0 lg:w-1/2 lg:pl-24 lg:text-left">
              <h2>Simple UI & UX</h2>
              <p className="mt-4">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
            <img
              src={circleBg}
              alt="Background pattern circle"
              className="absolute right-0 -z-10 hidden w-[780px] translate-x-1/2 lg:block"
            />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-y-12 md:grid-cols-3 md:items-start md:gap-x-8 xl:gap-x-16">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={financesIcon} alt="Personal finances icon" />
              <div className="mt-8">
                <h4>Personal Finances</h4>
                <p className="mt-4">
                  Consolidate financial data from multiple sources and
                  categorize transactions up to 2 years of history. Analyze
                  reports to reconcile activities in your account.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img src={bankingIcon} alt="Banking and coverage icon" />
              <div className="mt-8">
                <h4>Banking & Coverage</h4>
                <p className="mt-4">
                  With our platform, you can speed up account onboarding and
                  support ongoing payments for checking, savings, credit card,
                  and brokerage accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img src={paymentsIcon} alt="Consumer payments icon" />
              <div className="mt-8">
                <h4>Consumer Payments</h4>
                <p className="mt-4">
                  It’s easier to set up secure bank payments with us through a
                  flow designed with the user experience in mind. Customers
                  could instantly authenticate their account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
