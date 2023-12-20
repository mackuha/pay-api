import React, { useState } from "react"
import Button from "./Button"

function ScheduleInlineForm() {
  const [email, setEmail] = useState("")

  function handleChange(event) {
    setEmail(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setEmail("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:flex-row md:gap-0"
    >
      <input
        type="email"
        value={email}
        onChange={handleChange}
        required
        placeholder="Enter email address"
        className="w-full rounded-full py-4 pl-5 font-bold text-blue-900 shadow-xl"
      />
      <Button className="w-full shadow-xl md:-ml-10 md:w-auto">
        Schedule a Demo
      </Button>
    </form>
  )
}

export default ScheduleInlineForm
