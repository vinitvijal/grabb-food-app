import React from 'react'
import { useParams } from 'react-router-dom'

export default function Table() {
    const data = useParams()
    console.log(data)
    return (
        <div>
            Table {data.table}
        </div>
    )
}
