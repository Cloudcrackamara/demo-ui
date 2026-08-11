import React from 'react'
import Navbar from './navbar'

type LayoutProps = {
  children: React.ReactNode
}

const layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
        <Navbar />
        <main className="flex-1 ">
      {children}
      </main>
    </div>
  )
}

export default layout