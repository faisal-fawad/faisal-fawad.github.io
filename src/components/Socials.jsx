import GitHub from '../assets/github.svg?react'
import LinkedIn from '../assets/linkedin.svg?react'
import Email from '../assets/email.svg?react'
import Moon from '../assets/moon.svg?react'
import Sun from '../assets/sun.svg?react'

export default function Socials() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="flex flex-wrap gap-5 my-5">
      <a className="hover:scale-110 transition-transform" target="_blank" aria-label="My GitHub" href="https://github.com/faisal-fawad">
        <GitHub className="h-10 w-10 max-[625px]:h-8 max-[625px]:w-8 fill-slate-900 dark:fill-slate-200"/>
      </a>
      <a className="hover:scale-110 transition-transform" target="_blank" aria-label="My LinkedIn" href="https://www.linkedin.com/in/faisal-fawad">
        <LinkedIn className="h-10 w-10 max-[625px]:h-8 max-[625px]:w-8 fill-slate-900 dark:fill-slate-200"/>
      </a>
      <a className="hover:scale-110 transition-transform" target="_blank" aria-label="My Email" href="mailto:faisalfawad2004@gmail.com">
        <Email className="h-10 w-10 max-[625px]:h-8 max-[625px]:w-8 fill-slate-900 dark:fill-slate-200"/>
      </a>
      <a className="hover:scale-110 transition-transform" target="_blank" aria-label="Theme">
        <label className="relative inline-flex items-center cursor-pointer h-10 max-[625px]:h-8">
          <input type="checkbox" className="sr-only peer" aria-label="Switch for dark/light mode" onClick={toggleTheme}/>
          <div className="w-[60px] h-[34px] max-[625px]:w-[48px] max-[625px]:h-[27px] bg-slate-300 rounded-full relative inline-flex items-center justify-around
          after:content-[''] after:bg-slate-900 after:w-[28px] after:h-[28px] after:rounded-full after:absolute
          after:bottom-[3px] after:left-[3px] peer-checked:after:translate-x-[26px] after:transition-transform after:duration-[.4s]
          dark:after:bg-slate-200 dark:bg-slate-700 max-[625px]:after:w-[22px] max-[625px]:after:h-[22px] max-[625px]:peer-checked:after:translate-x-[21px]">
            <Moon className="w-5 h-5 max-[625px]:w-4 max-[625px]:h-4 select-none fill-slate-900 dark:fill-slate-700"/>
            <Sun className="w-5 h-5 max-[625px]:w-4 max-[625px]:h-4 select-none fill-slate-300 dark:fill-slate-200"/>
          </div>
        </label>
      </a>
    </div>
  )
}