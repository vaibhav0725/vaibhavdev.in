import React from 'react'

export const SnippetCard = ({
    title,description
}:{
    title:string,
    description:string
}) => {
  return (
    <>
      <div className='relative shadow-[var(--shadow-aceternity)] dark:shadow-[var(--shadow-dark-aceternity)] rounded-2xl h-28 p-2'>
          <h3 className='text-2xl font-semibold tracking-tighter dark:text-neutral-300'>{title}</h3>
          <div className='text-sm w-xs dark:text-neutral-400'>{description}</div>
      </div>
      <div className='relative h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-sky-300 dark:to-transparent '></div>
    </>
  )
}