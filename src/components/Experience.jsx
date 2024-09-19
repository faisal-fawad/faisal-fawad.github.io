import { useState } from 'react';

export default function Experience() {
  const experiences = [
    {
      name: "Ericsson",
      link: "https://www.ericsson.com/",
      title: "Software Engineer Intern",
      description: "🌐 Cloud Infrastructure",
      src: "logos/ericsson.jpg",
      color: "rgba(1,111,224,0.2)"
    },
    {
      name: "Canada Life",
      link: "/blog/canada-life/",
      title: "Software Developer Intern",
      description: "⚙️ Backend Development",
      src: "logos/canada_life.jpg",
      color: "rgba(217,30,38,0.2)"
    },
    {
      name: "University of Guelph",
      link: "https://www.uoguelph.ca/",
      title: "Research Assistant",
      description: "🎥 Sonographic Image Processing",
      src: "logos/guelph_ovc.png",
      color: "rgba(255,199,42,0.2)"
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@zelchy",
      title: "Content Creator",
      description: "🎮 Brawlhalla eSports",
      src: "logos/youtube.jpg",
      color: "rgba(205,32,31,0.2)"
    },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section id="work" className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 box-content px-[10px] relative z-10">
      <h1 className="text-3xl font-bold">Work</h1>
      <ul>
        {experiences.map((work, i) => (
          <li key={i} className="my-4 group relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 overflow-hidden">
            <a target="_blank" href={work.link} onMouseMove={handleMouseMove} className="flex p-4 max-w-full">
              <img src={work.src} alt={work.name + " logo"} className="object-contain w-16 h-16 rounded z-10" />
              <ul className="pl-4 z-10">
                <h2 className="text-xl max-[625px]:text-lg font-bold">{work.name}</h2>
                <p className="my-2 dark:text-slate-200 text-slate-900 text-base max-[625px]:text-sm">
                  <span className="font-semibold">{work.title}</span>
                  <span> &mdash; </span>
                  <span>{work.description}</span>
                </p>
              </ul>
            </a>
            <div
              className="hover-follow absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${work.color}, transparent 125%)`
              }}
            ></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
