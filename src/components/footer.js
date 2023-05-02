export default function Footer() {
  return(
    <div
      className="text-white bg-slate-900 mt-3 static flex w-full p-3 shadow-lg justify-between mx-auto text-center"
      id="contact"
    >
      <div
      className="flex flex-col justify-between"
      >
        <ul className="flex flex-col justify-center">
          <li><b>E-mail:</b> wf.hadid94@gmail.com</li>
          <li><b>Phone:</b> (804) 497-6835</li>
        </ul>
      </div>
      <div className="mx-20">
        <ul>
          <li>
            <a 
            href="https://github.com/wardalhadid"
            className="hover:text-cyan-400"
            target="_blank"
            rel="noreferrer"
          >GitHub</a></li>
          <li>
            <a href="https://www.linkedin.com/in/wardalhadid"
            className="hover:text-cyan-400"
            target="_blank"
            rel="noreferrer"
            >LinkedIn</a>
            </li>
        </ul>
      </div>
    </div>
  );
}
