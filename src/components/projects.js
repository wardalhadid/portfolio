import Image from "next/image";

export default function Projects({projects}) {
  return(
    <div className="flex items-center flex-col justify-center w-10/12 mx-auto mt-3 flex justify-center shadow-md p-2" id="projects">
      <h2 className="mb-2 text-2xl"><b>Projects</b></h2>
      <div>
      {
      projects.map(({title, url, source, description, images, stack}) => (
        <div className="flex flex-col shadow-sm mb-2 relative p-2 justify-center items-center gap-3" key={title}>
          <h3 className="flex justify-center mb-1 font-bold text-xl"><a href={url} target="_blank" rel="noreferrer" className="hover:text-cyan-400 cursor-pointer">{title}</a></h3>
          { images.map((image, index) => (
            <div className="w-full flex items-center justify-center" key={index}>
            <Image src={image} alt="project image" width="700" height="700" />
            </div>
            ))
            }
          <section>
            <p className="font-light mb-1">{description}</p>
            <p className="font-thin text-sm mb-3">Stack: {stack}</p>
            <span className="text-sm font-light absolute bottom-2 right-1"><a href={source} target="_blank" className="hover:text-cyan-400 cursor-pointer" rel="noreferrer">Source</a></span>
          </section>
        </div>
      ))
      }
      </div>
    </div>
  )
}