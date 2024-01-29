import Socials from './Socials.jsx'

export default function Home() {
  return (
    <section id="home" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200">
      <h1 className="text-7xl font-bold tracking-tight">
        {[..."Hi, I'm Faisal"].map((letter, i) => {
          if (letter === " ") {
            return (
              <div key={i} className="inline-block">&nbsp;</div>
            )
          }

          return (
            <span key={i} onMouseOver={({ target }) => target.classList.add('jump')} onAnimationEnd={({ target }) => target.classList.remove('jump')}
              className="inline-block">
              {letter}
            </span>
          )
        })}
      </h1>
      <h2 className="my-4">Software Developer | Problem Solver | Innovator</h2>
      <Socials/>
    </section>
  )
}