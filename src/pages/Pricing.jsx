import React from "react"
import { Link } from "react-router-dom"
import checkIcon from "/shared/icon-check.svg"
import Button from "../components/ui/Button"

function Pricing() {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-6">
        <h1 className="text-center lg:text-left">Pricing</h1>
        <div className="mb-20 mt-12 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-20">
          <div className="text-center lg:text-left">
            <h5 className="text-pink-700">Free Plan</h5>
            <p className="mt-2">
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h2 className="mt-8 text-[56px]">$0.00</h2>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <ul className="mx-auto w-max space-y-2 lg:ml-0">
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Transactions
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Auth
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Identity
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Investments
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Assets
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Liabilities
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Income
              </li>
            </ul>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <Link to="/contact" className="inline-block">
              <Button variant="outline_light">Request Access</Button>
            </Link>
          </div>
          <div className="text-center lg:text-left">
            <h5 className="text-pink-700">Basic Plan</h5>
            <p className="mt-2">
              Launch your project with unlimited requests and no contractual
              minimums{" "}
            </p>
            <h2 className="mt-8 text-[56px]">$249.00</h2>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <ul className="mx-auto w-max space-y-2 lg:ml-0">
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Transactions
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Auth
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Identity
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Investments
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Assets
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Liabilities
              </li>
              <li className="flex items-center justify-start gap-x-6 text-blue-700 opacity-60">
                <img src={checkIcon} alt="Check icon" className="opacity-0" />
                Income
              </li>
            </ul>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <Link to="/contact" className="inline-block">
              <Button variant="outline_light">Request Access</Button>
            </Link>
          </div>
          <div className="text-center lg:text-left">
            <h5 className="text-pink-700">Premium Plan</h5>
            <p className="mt-2">
              Get tailored solutions, volume pricing, and dedicated support for
              your team{" "}
            </p>
            <h2 className="mt-8 text-[56px]">$499.00</h2>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <ul className="mx-auto w-max space-y-2 lg:ml-0">
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Transactions
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Auth
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Identity
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Investments
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Assets
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Liabilities
              </li>
              <li className="flex items-center justify-start gap-x-6">
                <img src={checkIcon} alt="Check icon" />
                Income
              </li>
            </ul>
            <div className="my-6 h-[1px] w-full bg-black opacity-20"></div>
            <Link to="/contact" className="inline-block">
              <Button variant="outline_light">Request Access</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
