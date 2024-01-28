import Socials from './Socials.jsx'

export default function Footer() {
  return (
    <footer className="w-[100%] h-[100px] max-w-[600px] m-auto bg-slate-200 dark:bg-slate-800">
      <div className="flex justify-between h-[100%] w-[100%] py-[25px]">
        <Socials/>
        <a className="py-4 px-2 font-bold text-slate-900 dark:text-slate-200" target='_blank' href="https://github.com/faisal-fawad/personal-website">Source</a>
      </div>
    </footer>
  )
}