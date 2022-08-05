import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Categories from '../components/categories/Categories'
import Layout from '../components/layouts/Layout'
import Product from '../components/products/Product'
import Search from '../components/search/Search'

export default function Home() {
    return (
        <Layout>
            <Search />
            <Carousel />
            <Categories />
            <Product />
        </Layout>
    )
}
