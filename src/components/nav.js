export default function Nav() {
  return(
    <nav
    className="text-white bg-slate-900 fixed top-0 flex w-full p-3 shadow-lg justify-between mx-auto z-10"
    >
      <div>
        <h2 className="text-2xl"><b>Ward Alhadid</b></h2>
      </div>
      <div>
        <ul className="flex gap-3">
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#about">About</a> </li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#projects">Projects</a> </li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#contact">Contacts</a> </li>
        </ul>
      </div>
    </nav>
  );
}