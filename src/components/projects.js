import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects }) {
  return (
    <div
      className="flex items-center flex-col justify-center mx-auto mt-3 shadow-md p-2 w-10/12"
      id="projects"
    >
      <h2 className="mb-2 text-2xl">
        <b>Projects</b>
      </h2>
      <div>
        {projects.map(({ title, url, source, description, images, stack }) => (
          <div
            className="flex flex-col shadow-sm mb-2 relative p-2 justify-center items-center gap-3 w-10/12 mx-auto"
            key={title}
          >
            <h3 className="flex justify-center mb-1 font-bold text-xl">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 text-sky-900 cursor-pointer"
              >
                {title}
              </a>
            </h3>
            <div className="carousel w-full">
              {images.map((image, index) => (
                <div
                  id={`${title}item${index}`}
                  className="carousel-item w-full"
                  key={index}
                >
                  <Image
                    src={image.src}
                    alt="project image"
                    width={image.width}
                    height={image.height}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
            {images.length > 1 && 
              <div className="flex justify-center w-full py-2 gap-2">
                {images.map((image, index) => (
                  <Link
                    key={index}
                    href={`#${title}item${index}`}
                    className="btn btn-xs"
                  >
                    {index + 1}
                  </Link>
                ))}
              </div>
            }
            <section className="p-3">
              <p className="font-light mb-1">{description}</p>
              <p className="font-thin text-sm mb-3">Stack: {stack}</p>
              <span className="text-sm font-light absolute bottom-2 right-1">
                <a
                  href={source}
                  target="_blank"
                  className="hover:text-cyan-400 cursor-pointer"
                  rel="noreferrer"
                >
                  Source
                </a>
              </span>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
