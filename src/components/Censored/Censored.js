'use client'
import React from 'react'

function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(false)

  function handleCensored() {
    setIsCensored(!isCensored)
  }
  return (
    <button
      onClick={handleCensored}
      className={isCensored ? 'censored' : undefined}
    >
      {children}
    </button>
  )
}

export default Censored
