export default function Projects() {
  const projects = [
    {
      name: "Pokepedia",
      link: "",
      description: "A full-stack web application functioning as a Pokedex",
      technologies: ["SvelteKit", "Node.js", "Redis", "Docker", "Azure"]
    },
    {
      name: "nSig-chan",
      link: "",
      description: "A discord bot for moderation and data visualization",
      technologies: ["Python", "Discord API", "MongoDB", "Node.js"]
    },
    {
      name: "PrintNote",
      link: "",
      description: "A OneNote add-in for printing one long page",
      technologies: ["C#", ".NET", "OneNote API"]
    }
  ]

  return (
    <section id="projects" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {projects.map((project, i) => (
          <li key={i} className="p-4 my-4 rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200">
            <a target="_blank" href={project.link}>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="my-2">{project.description}</p>
              <ul className="flex flex-wrap">
                {project.technologies.map((technology, j) => (
                  <li key={j} className="border-slate-600 text-slate-900 dark:border-slate-400 dark:text-slate-200 border-[1px] rounded px-3 py-1 mt-2 mr-2 font-light">{technology}</li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}