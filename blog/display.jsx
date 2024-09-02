import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/index.css'
import Blog from '/src/components/Blog.jsx'
import Nav from '/src/components/Nav.jsx'

export function Display(title, text) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Nav/>
      <Blog title={title} text={text}/>
    </React.StrictMode>,
  )
}