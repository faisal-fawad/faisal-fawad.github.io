import Moon from '../assets/moon.svg?react'
import Sun from '../assets/sun.svg?react'

export default function Nav() {
  const links = ["Home", "About", "Projects"];

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <nav className="w-[100%] h-[100px] max-w-[800px] m-auto z-10 bg-slate-200 sticky top-0 dark:bg-slate-800">
      <div className="flex justify-between h-[100%] w-[100%] py-[25px]">
        <label className="relative inline-flex items-center cursor-pointer h-[50px] px-[25px]">
          <input type="checkbox" className="sr-only peer" onClick={toggleTheme}/>
          <div className="w-[60px] h-[34px] bg-slate-300 rounded-full relative inline-flex items-center justify-around
          after:content-[''] after:bg-slate-900 after:w-[28px] after:h-[28px] after:rounded-full after:absolute
          after:bottom-[3px] after:left-[3px] peer-checked:after:translate-x-[26px] after:transition-transform after:duration-[.4s]
          dark:after:bg-slate-200 dark:bg-slate-700">
            <Moon className="w-5 h-5 select-none fill-slate-900 dark:fill-slate-700"/>
            <Sun className="w-5 h-5 select-none fill-slate-300 dark:fill-slate-200"/>
          </div>
        </label>
        <ul className="flex h-[100%] items-center">
          {links.map((link, i) => (
            <li key={i}>
              <a className="py-4 px-6 font-bold text-slate-900 dark:text-slate-200
              hover:text-cyan-600 dark:hover:text-cyan-300" href={"/#" + link.toLowerCase()}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}