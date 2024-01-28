export default function Nav() {
  const links = ["Home", "About", "Projects"];

  return (
    <nav className="w-[100%] h-[100px] bg-gray-400 fixed">
      <div className="flex justify-around h-[100%] w-[100%] p-5">
        <div className="h-[100%] aspect-square bg-red-400"></div>
        <ul className="flex h-[100%] items-center">
          {links.map((link, i) => (
            <li key={i}>
              <a className="py-4 px-6" href={"/#" + link.toLowerCase()}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}