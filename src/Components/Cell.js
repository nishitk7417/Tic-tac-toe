import React from 'react'

export default function Cell({value, onCellClick}) {
  return (
    <button className={`cell ${value ==='X'? 'X': value === 'O'? 'O':""}`} onClick={onCellClick}>{value}</button>
  )
}
