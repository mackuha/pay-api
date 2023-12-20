import React from "react"
import circleBg from "/shared/bg-pattern-circle.svg"
import teamImg from "/about/img-team-members.png"

function About() {
  return (
    <div className="relative pb-20 pt-10">
      <img
        src={circleBg}
        alt="Background pattern circle"
        className="absolute -right-[200px] -top-[380px] -z-10 md:-right-[450px] md:-top-[680px] lg:-right-[300px] lg:-top-[700px]"
      />
      <div className="container mx-auto px-6 lg:max-w-5xl">
        <h1 className="text-center lg:w-8/12 lg:text-left">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="mt-10 space-y-12 text-center md:mt-14 md:text-left">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
            <h3 className="md:w-4/12">Our Vision</h3>
            <p className="mt-4 md:mt-0 md:w-8/12 xl:pr-20">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
            <h3 className="md:w-4/12">Our Business</h3>
            <p className="mt-4 md:mt-0 md:w-8/12 xl:pr-32">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={teamImg}
          alt="Image of PayAPI's team members"
          className="my-12 h-[300px] w-full object-cover object-left lg:h-[400px] lg:object-[50%_35%]"
        />
      </div>
      <div className="container mx-auto px-6 xl:max-w-5xl">
        <div className="my-6 h-[1px] w-full bg-black opacity-20 md:hidden"></div>
        <div className="grid space-y-8 text-center md:grid-cols-3 md:gap-10 md:space-y-0 md:text-left">
          <div className="border-blue-900/20 py-4 md:border-y-[1px]">
            <p className="opacity-70">Team Members</p>
            <h2 className="text-[56px] text-pink-700">300+</h2>
          </div>
          <div className="border-blue-900/20 py-4 md:border-y-[1px]">
            <p className="opacity-70">Offices in the US</p>
            <h2 className="text-[56px] text-pink-700">3</h2>
          </div>
          <div className="border-blue-900/20 py-4 md:border-y-[1px]">
            <p className="opacity-70">Transactions analyzed</p>
            <h2 className="text-[56px] text-pink-700">10M+</h2>
          </div>
        </div>
        <div className="my-6 h-[1px] w-full bg-black opacity-20 md:hidden"></div>
      </div>
      <div className="container mx-auto px-6 lg:max-w-5xl">
        <div className="mt-10 space-y-12 text-center md:mt-14 md:text-left">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
            <h3 className="md:w-4/12">The Culture</h3>
            <p className="mt-4 md:mt-0 md:w-8/12 xl:pr-20">
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
            <h3 className="md:w-4/12">The People</h3>
            <p className="mt-4 md:mt-0 md:w-8/12 xl:pr-32">
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
