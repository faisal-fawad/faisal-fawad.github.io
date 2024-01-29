import GitHub from '../assets/github.svg?react'
import LinkedIn from '../assets/linkedin.svg?react'
import Email from '../assets/email.svg?react'

export default function Socials() {
  return (
    <div className="flex gap-5">
      <a className="hover:scale-110 transition-transform" target="_blank" href="https://github.com/faisal-fawad">
        <GitHub className="h-12 w-12 max-[625px]:h-10 max-[625px]:w-10 fill-slate-900 dark:fill-slate-200"/>
      </a>
      <a className="hover:scale-110 transition-transform" target="_blank" href="https://www.linkedin.com/in/faisal-fawad/">
        <LinkedIn className="h-12 w-12 max-[625px]:h-10 max-[625px]:w-10 fill-slate-900 dark:fill-slate-200"/>
      </a>
      <a className="hover:scale-110 transition-transform" target="_blank" href="mailto:faisalfawad2004@gmail.com">
        <Email className="h-12 w-12 max-[625px]:h-10 max-[625px]:w-10 fill-slate-900 dark:fill-slate-200"/>
      </a>
    </div>
  )
}