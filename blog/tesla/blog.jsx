import { Display } from "../display.jsx"

const title = "Summer 2025 @ Tesla"
const text = [
  <br/>,
  <img src="/tesla/header.jpg" alt="Image of Tesla Palo Alto interns"/>,
  <br/>,
  <p>For my third co-op work term, I joined Tesla as a Site Reliability Engineer on the HPC/AI Infrastructure team. This Tesla team is responsible for managing the supercomputers used by both Autopilot and Optimus. For some context, Autopilot is what enables full self-driving in Tesla vehicles, and Optimus is Tesla's very own humanoid robot. A lot of the work is confidential, and hence, for this work term report, I will be talking about a CS topic instead!</p>,  
  <br/>,
  <img src="/tesla/nda.png" alt="Meme about signing an NDA"/>,
  <br/>,
  <p>I will be briefly talking about dependency injection, a CS topic being utilized during my time at Tesla, and how it came in very handy when developing microservices. For some context, during my term, I had the opportunity to work on several microservices that supported our HPC clusters; these microservices were small, independent, and heavily utilized dependency injection (DI). With DI, we were able to abstract dependency logic by utilizing containers, which had many advantages:</p>,
  <br/>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>Containerization: By registering classes and services to a DI container, the system could automatically resolve dependencies, eliminating repetitive setup code and centralizing the classes and services that were exposed</li>
    <li>Testing: With containerization, testing became much easier and less time-consuming. Rather than manually mocking dependencies, we could simply create a test container with alternative implementations and stub methods</li>
    <li>Bloat: Without DI, our code would often contain long argument lists just to pass dependencies between multiple architectural layers. By injecting dependencies, we improved both function signatures and code readability</li>
  </ul>,
  <br/>,
  <p>Overall, I really liked working with a monorepository employing dependency injection. The code felt more modular, scalable, and flexible. Our team was able to iterate quickly, build reliable services, and keep the codebase clean and adaptable, which was crucial when working with large-scale infrastructure like Tesla's AI supercomputers!</p>,
  <br/>,
  <p>This experience has given me a strong foundation in applying DI principles, and I look forward to carrying these practices into future projects and roles</p>
]

Display(title, text)