import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const location = useLocation()
  return (
    <div>
        <h1>Home</h1>
        <h1>hello {location.state.id} and Welcome</h1>
    </div>
  )
}
