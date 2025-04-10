import Socials from './Socials.jsx'

export default function Home() {
  const experiences = [
    {
      name: "Tesla",
      link: "https://www.tesla.com/",
      src: "logos/tesla.jpg",
    },
    {
      name: "Ericsson",
      link: "https://www.ericsson.com/",
      src: "logos/ericsson.jpg",
    },
    {
      name: "Canada Life",
      link: "https://www.canadalife.com/",
      src: "logos/canada_life.jpg",
    },
    {
      name: "Ontario Veterinary College",
      link: "https://ovc.uoguelph.ca/",
      src: "logos/guelph.jpg",
    },
  ];
  
  return (
    <section id="home" className="max-w-[500px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 px-[10px] box-content">
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
      <ul className="flex gap-5 my-5 text-3xl max-[625px]:text-2xl">
        <li>🖥️</li>
        <li>🎮</li>
        <li>🎥</li>
        <li>🎨</li>
        <li>✈️</li>
      </ul>
      <h2 className="text-lg max-[625px]:text-base">
        I've worked @ {experiences.map((exp, index) => {
          let delim = ""
          if (index == experiences.length - 2) delim = ", and "
          else if (index < experiences.length - 1) delim = ", "
          return (
            <span key={index}>
              <a key={index} href={exp.link} target='_blank'>
                {exp.name}
              </a>
              {delim}
            </span>
          )
        })}
      </h2>
      <Socials/>
      <img src="images/back.png" alt="Backdrop" className="aspect-square object-cover rounded z-10" />
    </section>
  )
}