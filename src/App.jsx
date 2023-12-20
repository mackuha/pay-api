import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              title="Home - PayAPI"
              description="Explore PayAPI, your gateway to seamless financial integration. Access free APIs with an intuitive interface for secure and effortless bank payments. Simplify financial data consolidation from multiple sources with ease."
            />
          }
        />
        <Route
          path="pricing"
          element={
            <Pricing
              title="Pricing - PayAPI"
              description="Explore PayAPI's pricing options for enhanced financial integration. Unlock the potential of secure bank payments, ongoing transactions, and seamless data consolidation across checking, savings, credit card, and brokerage accounts. Choose the plan that suits your needs."
            />
          }
        />
        <Route
          path="about"
          element={
            <About
              title="About - PayAPI"
              description="Discover the story behind PayAPI, your trusted provider of free and user-friendly APIs. Learn how we make secure bank payments easy and support ongoing transactions for checking, savings, credit card, and brokerage accounts. Join us in simplifying financial data consolidation."
            />
          }
        />
        <Route
          path="contact"
          element={
            <Contact
              title="Contact - PayAPI"
              description="Get in touch with PayAPI for any inquiries or assistance. Our dedicated support team is here to help you integrate our APIs seamlessly. Reach out to us for reliable solutions in secure banking and ongoing payments."
            />
          }
        />
        <Route path="*" element={<NotFound title="404 Not Found" />} />
      </Route>
    </Routes>
  )
}

export default App
