import React from 'react'
import Item from './Item'

export default function Category() {
  return (
    <section style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'}}>
        <div className="titleOfCat">
            <h1>Bread</h1>
        </div>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

    </section>
  )
}
