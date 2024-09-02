import React from 'react'

export default function Blog(props) {
  return (
    <main className="max-w-[600px] mx-auto py-12 my-10 text-slate-900 dark:text-slate-200 px-[10px] box-content">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <div className="dark:text-slate-200 text-slate-900 max-[625px]:text-sm">
        {props.text.map((ele, index) => React.cloneElement(ele, {key: index}))}
      </div>
    </main>
  )
}