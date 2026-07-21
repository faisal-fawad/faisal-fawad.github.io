import { Display } from "../display.jsx"

const title = "Summer 2026 @ NVIDIA"
const text = [
  <br/>,
  <img src="/nvidia/header.jpg" alt="Image from my NVIDIA work term"/>,
  <br/>,
  <p>For my fifth co-op work term, I joined NVIDIA as a software engineer working on the infrastructure behind massive GPU clusters. If you've read my previous posts, you'll know I've spent a lot of time around HPC and large-scale compute, so this felt like a natural next step, just at a whole new scale. For some context, NVIDIA is best known for its GPUs, which power a lot of today's AI. The runtime my team works on is a set of components, several of them open source: NVIDIA's GPU Operator, which manages GPU drivers and telemetry on every node, and NVSentinel, which watches for hardware faults and pulls unhealthy nodes out of rotation before they can disrupt running jobs.</p>,
  <br/>,
  <p>My goals at the start of the term were to sharpen my skills with modern cloud-native tech, meet as many other interns as I could, and really understand how my team fits into the larger org. By the end I feel like I hit all three: I picked up a stack of new tools by building a project end to end, met interns from all over the company who gave me a much wider view of NVIDIA than my own team ever could, and came away with a clear sense of where our work fits in the bigger picture.</p>,
  <br/>,
  <p>So here's the puzzle I spent the term on: how do you prove a GPU cluster will hold up at scale when you can't afford to spin up the whole cluster to test it? Testing infrastructure at scale is expensive. A single high-end GPU node isn't cheap to rent by the hour, and when you need hundreds of them just to run one test, the bill adds up fast. That makes a pretty important question hard to answer: when a bunch of nodes go bad at the same time, can NVSentinel keep up and pull every one of them out of rotation before jobs start failing?</p>,
  <br/>,
  <p>The trick is that you don't always need real GPUs to test the part you care about. A Kubernetes cluster has two sides: a control plane (the brains: the API server, the record of every node, the scheduler) and a data plane (the muscle: the actual GPUs, drivers, and the real work running on them). A lot of the fault-handling logic lives entirely in the control plane. When NVSentinel decides a node is unhealthy and cordons it off, that's really just an API write; no GPU needs to be involved.</p>,
  <br/>,
  <p>So instead of paying for thousands of real GPU nodes, you can just fake them. That's what an open-source project called KWOK (Kubernetes WithOut Kubelet) does: it lets you stand up thousands of fake Kubernetes nodes that look completely real to the control plane but have no actual hardware behind them. From there you can fire off synthetic "this node just died" events and watch how fast NVSentinel reacts, all for a tiny fraction of the cost. That's basically what I built: a load-testing tool that spins up a big fleet of KWOK nodes, throws faults at them, and measures how it responds. A few things I got to validate:</p>,
  <br/>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>Correctness: every node that should've been cordoned actually was, with zero misses even as the fleet got huge</li>
    <li>Predictability: throughput stayed steady instead of degrading or falling behind as the load piled on</li>
    <li>Safety: NVSentinel ships with a circuit breaker that halts everything if too much of the fleet would go offline at once, and it tripped exactly when it should have</li>
  </ul>,
  <br/>,
  <p>One design choice I really liked: never let the system grade its own homework. On top of the metrics NVSentinel reports about itself, I ran a totally separate watcher that measured what actually happened from the outside. If the two ever disagree, that's exactly the kind of thing you want to catch early. That gap between what a system claims and what an outside observer sees is a testing habit I'll definitely carry into future projects.</p>,
  <br/>,
  <p>Overall, this was easily one of my favourite terms yet. I got to go deep on cloud-native tooling and actually ship something useful on a problem that was wide open when I started. Huge thanks to my mentor and the whole team for the trust (and for letting me share this one), and to all the interns who made the term such a good one! :)</p>
]

Display(title, text)
