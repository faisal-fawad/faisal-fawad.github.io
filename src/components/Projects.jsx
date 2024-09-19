export default function Projects() {
  const projects = [
    {
      name: "nSig-chan",
      link: "https://github.com/faisal-fawad/nSig-chan",
      description: "Discord bot for moderation and data visualization",
      technologies: ["Python", "Discord API", "MongoDB", "Oracle Cloud", "Heroku"],
      src: "logos/nsig.png"
    },
    {
      name: "imaginate.ai",
      link: "https://github.com/imaginate-ai",
      description: "Daily AI vs. real image guessing game",
      technologies: ["Python", "Flask", "React", "TypeScript", "Tailwind CSS", "GitHub Actions", "MongoDB", "AWS"],
      src: "logos/imaginate.png"
    },
    {
      name: "GooseGuard 🦢 — Hack the North",
      link: "https://github.com/faisal-fawad/GooseGuard",
      description: "AI-powered cybersecurity platform for scam detection",
      technologies: ["Next.js", "TypeScript", "Python", "BERT", "Groq", "Vercel"],
      // src: "logos/gooseguard.png"
    },
    {
      name: "vistorrent 📥",
      link: "https://github.com/faisal-fawad/vistorrent",
      description: "Lightweight torrenting client with visualization",
      technologies: ["Go", "JavaScript", "HTML/CSS"],
      // src: "logos/vistorrent.png"
    },
    {
      name: "Poképedia 🐣",
      link: "https://github.com/faisal-fawad/pokepedia",
      description: "Full-stack web application functioning as a Pokédex",
      technologies: ["SvelteKit", "JavaScript", "HTML/CSS", "Redis", "Docker", "Azure"],
      // src: "logos/pokepedia.png"
    },
    {
      name: "PrintNote 🖨️",
      link: "https://github.com/faisal-fawad/PrintNote",
      description: "OneNote add-in for printing one long page",
      technologies: ["C#", ".NET", "OneNote API"],
      // src: "logos/printnote.png"
    },
    // {
    //   name: "Pool",
    //   link: "https://github.com/faisal-fawad/pool",
    //   description: "Full-stack web application functioning as a Pool game",
    //   technologies: ["C", "Python", "SQL", "JQuery", "HTML/CSS"]
    // },
    // {
    //   name: "Kyrell's Adventure",
    //   link: "https://github.com/faisal-fawad/kyrells-adventure",
    //   description: "2D side scroller with custom assets and scaling difficulty",
    //   technologies: ["Unity", "C#"]
    // },
    // {
    //   name: "Mancala",
    //   link: "https://github.com/faisal-fawad/mancala",
    //   description: "Desktop application functioning as a Mancala board game",
    //   technologies: ["Java", "JUnit", "Java Swing"]
    // }
  ]

  return (
    <section id="projects" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 box-content px-[10px] relative z-10">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {projects.map((project, i) => (
          <li key={i} className="my-4 rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 
            hover:scale-[1.02] hover:translate-y-[-2px] transition-transform">
            <a target="_blank" href={project.link} className="block p-4">
              <h2 className="text-xl max-[625px]:text-lg font-semibold">
                {project.name.split(" ").map((word, i) => {
                  if (i == project.name.split(" ").length - 1) {
                    return (
                      <span className="whitespace-nowrap" key={i}>
                        {word}{project.src ? <img src={project.src} alt={project.name + " logo"} className="inline-block w-6 h-6 max-[625px]:w-5 max-[625px]:h-5 rounded-sm ml-2 max-[625px]:ml-1 mb-1 align-middle"></img> : ""}
                      </span>
                    )
                  }
                  return <span key={i} className="inline-block">{word}&nbsp;</span>
                })}
              </h2>
              <p className="my-2 dark:text-slate-200 text-slate-900 max-[625px]:text-sm">{project.description}</p>
              <ul className="flex flex-wrap">
                {project.technologies.map((technology, j) => (
                  <li key={j} className="border-slate-600 text-slate-900 dark:border-slate-400 dark:text-slate-200 
                    border-[1px] rounded px-3 py-1 mt-2 mr-2 font-light max-[625px]:text-sm">
                    {technology}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}