import React from 'react'
import { useState, useEffect } from 'react'
import './nodes.css'

export default function Nodes() {
  const [data, setData] = useState([])
  const [update, setUpdate] = useState([])
  const fetchURL = 'http://localhost:3000/users'

  useEffect(() => {
    const fetchData = async () => {
      const intervalId = setInterval(async () => {
        const x = await fetch(fetchURL).then(res => res.json())
        console.log(`Fetched data from ${fetchURL}`)
        setData(x)
      }, 1000)
      return () => {
        clearInterval(intervalId)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      {data.map(dataa => (
        <div className="node">
          <div className="inside" key={dataa.id}>
            {dataa.name}
            <div>função: {dataa.role}</div>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          fetch(`http://localhost:3000/adduser`)
        }}
      >
        adduser
      </button>
      <button
        onClick={() => {
          fetch(`http://localhost:3000/deluser`)
        }}
      >
        deluser
      </button>
    </div>
  )
}
