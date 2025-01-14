import LayoutApp from "@/components/sections/LayoutApp"
import Header from "@/components/sections/Header"
import Education from "@/components/sections/Education"
import Proyectos from "@/components/sections/Proyectos"
import Skills from "@/components/sections/Skills"
import Behance from "@/components/sections/Behance"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (

    <LayoutApp>
      <Header />
      <Education />
      <Proyectos />
      <Skills />
      <Behance />
      <Footer />
    </LayoutApp>

  )
}
