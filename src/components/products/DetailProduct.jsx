import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailProduct() {
    let params = useParams()
    return (
        <div>Detail product id : {params.id}</div>
    )
}
