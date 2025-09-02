import { Display } from "../display.jsx"

const title = "Summer 2024 @ Canada Life"
const text = [
  <br/>,
  <img src="/canada-life/header.jpg" alt="Image of Canada Life co-op students"/>,
  <br/>,
  <p>For my first co-op work term, I joined Canada Life as a Software Developer under the API delivery team. For some context, Canada Life is an insurance and financial services company founded in 1847, currently providing insurance to ⅓ Canadians (~13,000,000 clients). My main line of work was carrying out the migration of our CI/CD pipeline from legacy Bamboo to GitLab. This migration was no easy task as it consisted of 500+ components spanning Docker, Rancher, Apigee, and Nucleus (Canada Life's old architecture for APIs) with varying code ages and constraints across components.</p>,
  <br/>,
  <p>My goals at the start of the work term were to: become comfortable with Canada Life's modern tech stack; work in an agile environment and understand the overall development process; and contribute code across microservices while tracking progress through GitLab and JIRA. I felt that I achieved all these goals and learned a bunch of new things while doing so! I gained exposure to both new and familiar technologies, attended typical agile meetings while working towards bi-weekly sprints, and was able to contribute tons of code with some statistics illustrated below:</p>,
  <br/>,
  <img src="/canada-life/merges.png" alt="Bar graph of Faisal Fawad creating 875 merge requests on GitLab"/>,
  <br/>,
  <img src="/canada-life/contributions.png" alt="Contribution activity of Faisal Fawad on GitLab"/>,
  <br/>,
  <p>As mentioned previously, I mainly worked on the migration of our CI/CD pipeline, which was a lot of manual work. We addressed these issues by writing automation scripts using Python and Bash, which would make the necessary changes to Maven and Helm files while also interacting with RESTful APIs including GitLab and JIRA. Apart from the migration, I also had the opportunity to do some development work on microservices written in Java with the Spring framework. These microservices are used by Canada Life's suite of insurance products, with the main one being <a href="https://my.canadalife.com/" target="_blank">https://my.canadalife.com/</a>. I gained insight into some exciting Java frameworks that Canada Life uses, which are briefly described below:</p>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>JUnit + Mockito - enables consistent testing by isolating external dependencies</li>
    <li>Spring Data JPA + SQL - enables straightforward database querying within the microservice</li>
    <li>Lombok - automatically generates code that follows OOP best practices</li>
    <li>JHipster + OpenAPI - automatically generates boiler-plate code of a RESTful API</li>
  </ul>,
  <br/>,
  <p>In summary, during my time at Canada Life, I primarily worked on the migration of our CI/CD pipeline from Bamboo to GitLab; I also had the opportunity to do some API development work. I gained exposure to many technologies and tools, particularly Java, Spring, SQL, Python, Bash, CI/CD, and Docker.</p>,
  <br/>,
  <p>It was a pleasure to work with everyone on my team. I'll specifically highlight a few people who I worked with the most:</p>,
  <ul style={{listStyleType: "initial", margin: "initial", padding: "0 0 0 35px"}}>
    <li>Bryan Johnson and Ethan Scruton - software developers who I worked closely with throughout the migration</li>
    <li>Mike Lucas and Vincent Yang - engineers who helped me whenever I got stuck on just about anything</li>
    <li>Julie Fraser - my manager who constantly checked up on me and helped me set goals throughout the work term</li>
  </ul>,
  <br/>,
  <p>I couldn't have asked for a better group of people to work with! Thank you to Julie and her team for making my experience at Canada Life one I will not forget.</p>
]

Display(title, text)