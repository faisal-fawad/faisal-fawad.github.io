export default function Home() {
  const info = [
    {
      command: "cat about.txt",
      output: "I'm currently studying Computer Science at the University of Guelph with a minor in Mathematics. " +
        "I love solving complex problems, exploring new technologies, and utilizing my skills to build cool things! " +
        "My main interests include programming 👨🏽‍💻, video games 🎮, movies 🎥, and art 🎨."
    }
  ]

  return (
    <section id="about" className="box-content relative max-w-[600px] mx-auto py-10 px-[10px] z-10">
      <div className="text-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 rounded-lg flex flex-col">
        <div className="rounded-t-lg text-center py-1 text-base max-[625px]:text-sm bg-slate-700 text-slate-200 dark:bg-slate-300 dark:text-slate-900">faisal@desktop:~</div>
        <ul className="font-mono p-8 max-[625px]:text-sm max-[625px]:p-4">
          {info.map((ele, i) => (
            <li className="my-4" key={i}>
              <div><span className="font-bold">faisal@desktop:~$ </span>{ele.command}</div>
              <p className="my-2">{ele.output}</p>
            </li>
          ))}
            <li className="my-4">
              <div><span className="blink font-bold after:content-['|'] after:bg-slate-900 dark:after:bg-slate-200
              after:animate-[blink_1s_infinite_step-end]">faisal@desktop:~$ </span></div>
            </li>
        </ul>
      </div>
    </section>
  )
}