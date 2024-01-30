import Socials from './Socials.jsx'

export default function Home() {
  return (
    <section id="home" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 px-[10px] box-content">
      <h1 className="text-7xl max-[625px]:text-6xl font-bold">
        {[[..."Hi,"], [..."I'm"], [..."Faisal"]].map((word, i) => {
          return (
            <div key={i} className='inline-block whitespace-nowrap'>
              {word.map((letter, j) => (
                <span key={j} onMouseOver={({ target }) => target.classList.add('jump')} onAnimationEnd={({ target }) => target.classList.remove('jump')}
                  className="inline-block">
                  {letter}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </h1>
      <h2 className="my-4 max-[625px]:text-sm">Software Developer | Problem Solver | Innovator</h2>
      <Socials/>
    </section>
  )
}