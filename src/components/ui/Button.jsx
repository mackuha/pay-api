import React from "react"

function Button({ children, variant, className, ...props }) {
  let variantStyles

  if (variant === "outline_light") {
    variantStyles =
      "bg-transparent text-blue-900 border-[1px] border-blue-900 hover:bg-blue-900 hover:text-white"
  } else if (variant === "outline_dark") {
    variantStyles =
      "bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-blue-900"
  } else {
    variantStyles = "bg-pink-700 text-white hover:bg-pink-500"
  }

  return (
    <button
      className={`whitespace-nowrap rounded-full px-6 py-4 font-bold transition-all ${className} ${variantStyles}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
