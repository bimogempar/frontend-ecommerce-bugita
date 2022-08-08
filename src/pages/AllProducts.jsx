import React from 'react'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'

export default function AllProducts() {
    return (
        <Layout>
            <HeaderPage title="All Products 🛍" back={1} />
        </Layout>
    )
}
