import Socials from './Socials.jsx'

export default function Home() {
  return (
    <section id="home" className="max-w-[600px] mx-auto pt-12 mt-10 text-slate-900 dark:text-slate-200 px-[10px] box-content">
      <h1 className="text-5xl max-[625px]:text-4xl font-bold">
        {[[..."Faisal"], [..."Fawad"]].map((word, i) => {
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
      <h2 className="mt-5 text-lg max-[625px]:text-base">
        prev @ <a className='underline' href='https://www.ericsson.com/' target='_blank'>Ericsson</a>,
        {' '}<a className='underline' href='https://www.canadalife.com/' target='_blank'>Canada Life</a>, 
        {' '}<a className='underline' href='https://ovc.uoguelph.ca/' target='_blank'>Ontario Veterinary College</a>
      </h2>
      <Socials/>
      <img src="images/back.png" alt="Backdrop" className="aspect-square object-cover rounded z-10" />
    </section>
  )
}