'use client'

import { useEffect, useState } from "react"


const FechaActual = () => {

    const [fecha, setFecha] = useState('')

    useEffect (() => {

        setFecha(new Date().toLocaleDateString('es-Es',{year: 'numeric', month: 'long', day: 'numeric'}));

    },[])


  return (
    <span className="text-c-cyan">{fecha}</span>
  )
}

export default FechaActual