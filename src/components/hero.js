import Image from "next/image";
import useDownloader from 'react-use-downloader';

export default function Hero() {
  const {download} = useDownloader();

  const fileUrl ='/ward-alhadid-resume.pdf';
  const filename = 'ward-alhadid-resume.pdf';
  return(
    <div className="flex w-10/12 mx-auto mt-20 gap-1 h-max shadow-md " id="about">
      <div
        className="relative flex flex-col p-5 w-full justify-center items-center"
      >
        <h2 className="mb-2 text-2xl"><b>About Me</b></h2>
        <p className="font-light">Hello, I am <b>Ward</b>, I am a front-end Web developer with some knowledge in the backend. I work with JavaScript, React, NodeJS, Express, and MongoDB. Please take a moment to checkout some of my projects below, and do not hesitate to contact me for inquiries.</p>
        <span className="font-light text-sm absolute right-4 bottom-4 flex gap-1 items-center">Resume 
        <a>
        <button onClick={() => download(fileUrl, filename)} ><svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6 hover:text-cyan-400 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</button>
</a>
</span>
      </div>
      <div className="w-3/4">
        <Image src="/profile-pic.png" alt="profile-picture" width="400" height="400" />
      </div>
    </div>
  );
}