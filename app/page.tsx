import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <div className="flex justify-center my-12">
          <Link href="#about" className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-500" />
          </Link>
        </div>

        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
