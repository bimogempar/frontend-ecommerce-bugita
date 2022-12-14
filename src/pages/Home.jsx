import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Categories from '../components/categories/Categories'
import Layout from '../components/layouts/Layout'
import Products from '../components/products/Products'
import Search from '../components/search/Search'

export default function Home() {
    return (
        <Layout>
            <Search />
            <Carousel />
            <Categories />
            <Products />
        </Layout>
    )
}
