import { Display } from "../display.jsx"

const title = "Winter 2026 @ Tesla"
const text = [
  <br/>,
  <img src="/tesla-2/header.jpg" alt="Image from my second Tesla work term"/>,
  <br/>,
  <p>For my second work term at Tesla, I stayed on the HPC/AI Infrastructure side of the company and continued learning how operations work at scale. Because of NDA constraints, I can&apos;t talk about the specific projects themselves, but I can talk about the kind of engineering that made the work successful: clean automation, reliable tooling, and Ansible code that behaves the same way every time it runs</p>,
  <br/>,
  <p>My goals at the start of the term were to get more familiar with operations infrastructure on Tesla&apos;s HPC clusters, become more comfortable with the tooling used by the operations team, and strengthen my communication skills in team-based and 1:1 settings. I feel like I made strong progress on all three. I had the chance to work on several operations-focused efforts, spent a lot more time reading and writing Ansible, interacted more with Slurm, and even helped deploy one of my projects to Kubernetes myself</p>,
  <br/>,
  <p>Instead of describing the exact projects, I want to talk about what clean Ansible code looks like in an environment like Tesla&apos;s. In a multi-cluster HPC setup, small mistakes can spread quickly if automation is not predictable. That is why idempotency matters so much: the same playbook should be safe to run multiple times without creating drift, duplicating changes, or depending on the order in which tasks happen to execute</p>,
  <br/>,
  <p>Some habits that make Ansible code cleaner and easier to trust:</p>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>Idempotent tasks: prefer checks and built-in modules so reruns do not cause extra changes or inconsistent cluster state</li>
    <li>Small roles: keep logic separated so the intent of each role is obvious and reusable in applicable contexts</li>
    <li>Clear variables: name variables carefully and avoid hiding important behavior inside scattered defaults</li>
    <li>Safe changes: make it easy to understand what will change before a playbook touches many nodes or clusters</li>
  </ul>,
  <br/>,
  <p>Working this way matters even more in HPC operations because the environment is large, shared, and sensitive to small regressions. When you are supporting multiple clusters, clean automation is not just about elegance; it is about reducing risk, making rollback easier, and giving teammates confidence that a deployment or configuration change will behave consistently!</p>,
  <br/>,
  <p>I also got a much better feel for what bad vs. good Ansible code looks like. Reading other people&apos;s playbooks/roles taught me how quickly messy logic, repeated tasks, and unclear structure can make maintenance harder. At the same time, writing more Ansible myself made the benefits of good structure very obvious: the code is easier to reason about, easier to test mentally, and easier to reuse across environments</p>,
  <br/>,
  <p>Overall, I leave the term feeling like I grew a lot in both operations knowledge and technical maturity. I worked on meaningful infrastructure problems, got more comfortable with the tooling behind large HPC systems, and came away with a much stronger appreciation for clean, idempotent automation. Thanks to everyone on Tesla's HPC team for making the term (once again) such a good one :)</p>
]

Display(title, text)