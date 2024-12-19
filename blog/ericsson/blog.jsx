import { Display } from "../display.jsx"

const title = "Fall 2024 @ Ericsson"
const text = [
  <br/>,
  <img src="/ericsson/header.jpg" alt="Image of Ericsson Toronto interns and CEO"/>,
  <br/>,
  <p>For my second co-op work term, I joined Ericsson as a Software Engineer under the AT&T cloud infrastructure lab team. For some context, Ericsson is a telecommunications company providing mobile networks worldwide; It was founded in Stockholm, Sweden in 1876. Here are a few fun facts about Ericsson: created some of the first telephones in the world, works with every major internet service provider in North America, and is currently home to over 60,000 patents and counting. I mainly interacted and worked in Ericsson's on-premise cloud solution, widely known as CNIS. I took on several user stories delivering work that ties into observability, metrics, automation, and cluster configurations.</p>,  
  <br/>,
  <p>My goals at the start of the work term were to: familiarize myself with Ericsson's cloud infrastructure, learn new technologies in the cloud and networking space, and make the most out of Ericsson's resources and perks. By the end of the work term, I successfully achieved all of these goals. I gained hands-on experience working with large-scale infrastructure and became proficient in technologies like Ansible, Jenkins, and Kubernetes. Additionally, Ericsson sponsored me to obtain the Certified Kubernetes Administrator (CKA) certification, which further solidified my understanding of Kubernetes.</p>,
  <br/>,
  <p>One of my first major projects was to build a Jenkins pipeline for extracting execution metrics and identifying assets to log into Ericsson's internal portal. This was done by utilizing a Python library to communicate with the Jenkins API. This project was presented to AT&T production team leads and is now actively used by various teams within the organization. A rough overview of the design employed:</p>,
  <br/>,
  <img src="/ericsson/design.png" alt="Design of execution metrics pipeline through a flow chart"/>,
  <br/>,
  <p>I also had the opportunity to participate in test automation for verifying device observability, specifically focusing on monitoring metrics like CPU, memory, and disk utilization. I gained exposure to how Prometheus integrates with our environment and the powerful use cases of Robot Framework (a keyword-driven test suite). Near the end of my internship, I contributed to the automation of configuration generation for an upcoming infrastructure upgrade. One of my key contributions was enhancing the pipeline to encrypt sensitive data, which would only get decrypted on retrieval by the cluster. This improvement focused on enhancing security and preventing any potential exposure to end users.</p>,
  <br/>,
  <p>TL;DR: I worked at Ericsson on a business-facing project for AT&T's cloud network infrastructure. I gained insight into the complex on-prem solution spanning 60+ sites across North America, earned the Certified Kubernetes Adminstrator (CKA) certification, and worked with new technologies including Ansible, Jenkins, Kubernetes, Prometheus, and Linux.</p>,
  <br/>,
  <p>Shoutout to my amazing colleagues:</p>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>Satender Yadav, Feng Shen, and Debjani Das - Engineers and leads who assigned me work and provided help whenever I faced challenges</li>
    <li>Salma Konchar and Irshad Ahmad M - My project and line managers who consistently checked in to ensure I stayed on track</li>
  </ul>,
  <br/>,
  <p>I had a great experience at Ericsson, and I'll carry the knowledge I gained about large-scale infrastructure with me in the future! 😉</p>
]

Display(title, text)