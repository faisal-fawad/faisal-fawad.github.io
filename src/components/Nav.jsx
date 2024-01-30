import Moon from '../assets/moon.svg?react'
import Sun from '../assets/sun.svg?react'
import Source from '../assets/source.svg?react'
import { useState } from 'react';

export default function Nav() {
  const links = ["Home", "About", "Projects"];
  const [isOpen, setOpen] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  function toggleMenu() {
    document.body.style.overflow = isOpen ? "visible" : "hidden";
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    document.body.style.overflow = "visible";
    setOpen(false);
  }

  function buildNav(isMobile) {
    return (
      links.map((link, i) => (
        <li key={i} className={"inline-block"} onClick={isMobile ? closeMenu : undefined}>
          <a className="inline-block py-4 px-6 font-bold text-slate-900 dark:text-slate-200
          hover:text-cyan-600 dark:hover:text-cyan-300" href={"/#" + link.toLowerCase()}>
            {link}
          </a>
        </li>
      ))
    )
  }

  return (
    <nav className="w-[100%] h-[100px] max-w-[800px] m-auto z-10 bg-slate-200 sticky top-0 dark:bg-slate-800">
      <div className="flex justify-between h-[100%] w-[100%] py-[25px]">
        <label className="relative inline-flex items-center cursor-pointer h-[50px] px-[25px] max-[625px]:px-[10px]">
          <input type="checkbox" className="sr-only peer" aria-label="Switch for dark/light mode" onClick={toggleTheme}/>
          <div className="w-[60px] h-[34px] bg-slate-300 rounded-full relative inline-flex items-center justify-around
          after:content-[''] after:bg-slate-900 after:w-[28px] after:h-[28px] after:rounded-full after:absolute
          after:bottom-[3px] after:left-[3px] peer-checked:after:translate-x-[26px] after:transition-transform after:duration-[.4s]
          dark:after:bg-slate-200 dark:bg-slate-700">
            <Moon className="w-5 h-5 select-none fill-slate-900 dark:fill-slate-700"/>
            <Sun className="w-5 h-5 select-none fill-slate-300 dark:fill-slate-200"/>
          </div>
        </label>
        {/* Mobile navigation */}
        <div className="box-content relative inline-flex flex-col justify-center min-[625px]:hidden cursor-pointer h-[50px] w-[40px] px-[10px]" onClick={toggleMenu}>
          <div className={"absolute w-[40px] h-[4px] top-[14px] dark:bg-slate-200 bg-slate-900 rounded-full ham-top " + (isOpen ? "ham-active" : "")}></div>
          <div className={"absolute w-[40px] h-[4px] top-[23px] dark:bg-slate-200 bg-slate-900 rounded-full ham-mid " + (isOpen ? "ham-active" : "")}></div>
          <div className={"absolute w-[40px] h-[4px] bottom-[14px] dark:bg-slate-200 bg-slate-900 rounded-full ham-bot " + (isOpen ? "ham-active" : "")}></div>
        </div>
        <ul id="mobile-nav" className={"flex h-auto items-center min-[625px]:hidden bg-slate-200 dark:bg-slate-800 pb-[25px] invisible " +
          "flex-col absolute top-[100px] w-[100%] opacity-0 transition-[opacity,visibility] " +
          (isOpen ? "!visible opacity-100 h-auto" : "")}>
          {buildNav(true)}
        </ul>
        {/* Desktop navigation */}
        <a target="_blank" href="https://github.com/faisal-fawad/faisal-fawad.github.io" className="fixed w-20 h-20 right-0 top-0 max-[1000px]:hidden">
          <Source className="fill-slate-900 text-slate-200 dark:fill-slate-200 dark:text-slate-800"/>
        </a>
        <ul id="desktop-nav" className="flex h-[100%] items-center max-[625px]:hidden">
          {buildNav(false)}
        </ul>
      </div>
    </nav>
  )
}