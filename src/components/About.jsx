export default function Home() {
  const info = [
    {
      command: "cat intro.txt",
      output: "I'm currently studying Computer Science (with a minor in Math) at the University of Guelph and love exploring diverse technologies"
    },
    {
      command: "cat interests.txt",
      output: "I'm mainly interested in software development and solving complex problems. Aside from programming, I also spend some time playing a wide variety of games"
    }
  ]

  return (
    <section id="about" className="max-w-[600px] w-[600px] mx-auto my-10 text-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 rounded-lg">
      <div className="rounded-t-lg text-center py-1 text-base bg-slate-700 text-slate-200 dark:bg-slate-300 dark:text-slate-900">faisal@desktop:~</div>
      <ul className="font-mono p-8">
        {info.map((ele, i) => (
          <li className="my-4" key={i}>
            <div><span className="font-bold">faisal@desktop:~$ </span>{ele.command}</div>
            <p>{ele.output}</p>
          </li>
        ))}
          <li className="my-4">
            <div className="after:content-['|'] after:z-0 after:bg-slate-900 after:dark:bg-slate-200 after:animate-[blink_1s_infinite_step-end]"><span className="font-bold">faisal@desktop:~$ </span></div>
          </li>
      </ul>
    </section>
  )
}