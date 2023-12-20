import React, { useId, useState } from "react"
import circleBg from "/shared/bg-pattern-circle.svg"
import CompanyLogos from "../components/CompanyLogos"
import Button from "../components/ui/Button"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
    newsletter: false,
  })

  const id = useId()

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    setFormData({
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
      newsletter: false,
    })
  }

  return (
    <div className="relative pb-20 pt-10">
      <img
        src={circleBg}
        alt="Background pattern circle"
        className="absolute -right-[200px] -top-[380px] -z-10 md:-right-[450px] md:-top-[680px] lg:-right-[300px] lg:-top-[700px]"
      />
      <div className="container mx-auto px-6">
        <h1 className="mx-auto text-center md:max-w-xl lg:ml-0 lg:text-left">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="mt-10 grid lg:grid-cols-2 lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="mx-auto space-y-4 md:max-w-md xl:max-w-none"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full border-b-[1px] border-black/20 bg-transparent py-4 pl-5 focus:border-black/100 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full border-b-[1px] border-black/20 bg-transparent py-4 pl-5 focus:border-black/100 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              onChange={handleChange}
              value={formData.company}
              className="w-full border-b-[1px] border-black/20 bg-transparent py-4 pl-5 focus:border-black/100 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title}
              className="w-full border-b-[1px] border-black/20 bg-transparent py-4 pl-5 focus:border-black/100 focus:outline-none"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="h-24 w-full resize-none border-b-[1px] border-black/20 bg-transparent py-4 pl-5 focus:border-black/100 focus:outline-none"
              required
            />
            <div className="relative flex w-full items-center gap-4">
              <input
                type="checkbox"
                id={id + "-newsletter"}
                name="newsletter"
                onChange={handleChange}
                checked={formData.newsletter}
                className="disabled:border-steel-400 disabled:bg-steel-400 peer relative h-6 w-6 shrink-0 cursor-pointer appearance-none bg-blue-700/20 checked:bg-pink-500
                focus:border-pink-500 focus:outline-blue-900"
              />
              <label
                htmlFor={id + "-newsletter"}
                className="cursor-pointer text-blue-900"
              >
                Stay up-to-date with company announcements and updates to our
                API
              </label>
              <svg
                className="pointer-events-none absolute hidden h-6 w-6 fill-white outline-none peer-checked:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </div>
            <Button variant="outline_light">Submit</Button>
          </form>
          <div className="mt-20 text-center">
            <h5 className="mx-auto mb-8 opacity-70 md:max-w-md lg:text-left xl:max-w-none">
              Join the thousands of innovators that are already building with us
            </h5>
            <CompanyLogos color="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
