import Image from "next/image";
import Link from "next/link";

export default function Projects({projects}) {
  return(
    <div className="flex items-center flex-col justify-center mx-auto mt-3 shadow-md p-2 w-10/12 md:w-full" id="projects">
      <h2 className="mb-2 text-2xl"><b>Projects</b></h2>
      <div>
      {
      projects.map(({title, url, source, description, images, stack}) => (
        <div className="flex flex-col shadow-sm mb-2 relative p-2 justify-center items-center gap-3 w-10/12 mx-auto" key={title}>
          <h3 className="flex justify-center mb-1 font-bold text-xl"><a href={url} target="_blank" rel="noreferrer" className="hover:text-cyan-400 cursor-pointer">{title}</a></h3>
          <div className="flex justify-center w-7/12 md:w-9/12">
          <div className="carousel w-full">
          { images.map((image, index) => (
            <div id={`${title}slide${index}`} className="carousel-item relative w-full" key={index}>
              <Image src={image} alt="project image" width={500} height={400} className="w-full"/>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href={(index - 1 < 0) ? `#${title}slide${images.length - 1}` : `#${title}slide${index - 1}`}  className="btn btn-circle btn-ghost">❮</Link> 
                <Link href={(index + 1 >= images.length) ? `#${title}slide0` : `#${title}slide${index + 1}`} 
                className="btn btn-circle btn-ghost">❯</Link>
              </div>
            </div> 
            ))
            }
            </div>
            </div>
          <section className="p-3">
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