import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
