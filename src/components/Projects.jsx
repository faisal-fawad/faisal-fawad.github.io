export default function Projects() {
  const projects = [
    {
      name: "Poképedia",
      link: "https://github.com/faisal-fawad/pokepedia",
      description: "Full-stack web application functioning as a Pokédex",
      technologies: ["SvelteKit", "Node.js", "Redis", "Docker", "Azure"]
    },
    {
      name: "nSig-chan",
      link: "https://github.com/faisal-fawad/nSig-chan",
      description: "Discord bot for moderation and data visualization",
      technologies: ["Python", "Discord API", "MongoDB", "Node.js"]
    },
    {
      name: "PrintNote",
      link: "https://github.com/faisal-fawad/PrintNote",
      description: "OneNote add-in for printing one long page",
      technologies: ["C#", ".NET", "OneNote API"]
    },
    {
      name: "Kyrell's Adventure",
      link: "https://github.com/faisal-fawad/kyrells-adventure",
      description: "2D side scroller with custom assets and scaling difficulty",
      technologies: ["Unity", "C#"]
    }
  ]

  return (
    <section id="projects" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 box-content px-[10px]">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {projects.map((project, i) => (
          <li key={i} className="my-4 rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 
            hover:scale-[1.02] transition-transform">
            <a target="_blank" href={project.link} className="block p-4">
              <h2 className="text-xl max-[625px]:text-lg font-semibold">{project.name}</h2>
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