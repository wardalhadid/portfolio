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
        <p className="font-light">Hello, I’m <b>Ward Alhadid</b>, a Java Developer with over 2 years of hands-on experience working at Infosys on the Verizon account, where I design, develop, and optimize enterprise-level applications. My work focuses on building microservices using Spring Boot, Apache Camel, and jBPM for process orchestration.
I have strong expertise in Cassandra DB and DB2, including designing and maintaining data synchronization between the two, as well as implementing Spring Batch solutions for large-scale data processing.
On a day-to-day basis, I collaborate closely with stakeholders to gather requirements, design technical solutions, and implement code changes that enhance system functionality and reliability. I also perform root cause analysis and deliver effective bug fixes or design improvements to ensure system stability and performance.
I’m passionate about writing clean, efficient code, solving complex problems, and continuously improving system design. Please do not hesitate to <a className="text-sky-500 text-bold hover:text-cayan-400 cursor-pointer hover:font-bold hover:text-lg" href="mailto:wf.hadid94@gmail.com" target="_blank" rel="noreferrer">Contact</a> me for inquiries.</p>
        <span className="font-light text-sm absolute right-1 bottom-4 flex gap-1 items-center">Resume 
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
