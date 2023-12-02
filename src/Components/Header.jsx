import React from 'react'

export default function Header({username,useravatar}) {
  return (
    <header>
    <h1>Bienvenue {username}</h1>
    <img src={useravatar} alt={username} width="50" height="20" />
  </header>
  )
}
