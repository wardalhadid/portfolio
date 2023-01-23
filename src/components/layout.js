import Footer from "./footer";
import Hero from "./hero";
import Nav from "./nav";
import Projects from "./projects";

export default function Layout({projects}) {
  return(
   <div className="flex flex-col gap-6">
    <Nav />
    <Hero />
    <Projects projects={projects} />
    <Footer />
   </div>
  )
}