import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="container mx-auto max-w-xl px-6 text-center">
        <h1 className="">Oops! Page not found.</h1>
        <p className="mt-4">
          It seems like you've stumbled upon an uncharted territory. The page
          you're looking for may have taken a detour or doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
