
import axios from "axios";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";

import { useNavigate } from 'react-router-dom'
import { addToCart } from "../redux/slice/CartSlice";

export default function Category() {
    const { idCategory } = useParams()
    const [productFilter, setProductFilter] = useState([]);
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories/${idCategory}/products?limit=5&offset=${offset}`)
            .then(res => {
                setProductFilter([...productFilter, ...res.data])
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCategory, offset]);

    const handleAddCart = (category) => {
        dispatch(
            addToCart(category)
        )
    }

    return (
        <Layout>
            <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
                {
                    productFilter.map((product, index) => (
                        <div key={index} className="col-span-1 flex flex-col bg-white p-4 rounded-lg">
                            <img src={product.images[0]} alt="" className='rounded-lg h-2/5 md:h-1/3 lg:h-2/6 xl:h-1/2 mb-4 object-cover cursor-pointer' onClick={() => navigate(`/products/${product.id}`)} />
                            <div className='mb-2 cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}>{product.title}</div>
                            <div className="text-xs">{product.description.substring(0, 100) + '...'}</div>
                            <div className="mt-auto text-xs">
                                <div className="mr-2 mb-2">#{product.category.name}</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className='text-sm font-medium mt-2'>Rp. {product.price}</div>
                                <BsCartPlus size={20} className="text-green-500 cursor-pointer" onClick={() => handleAddCart(product)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button className="bg-white p-2 rounded-lg" onClick={() => setOffset(offset + 5)}>Load More</button>
            </div>
        </Layout>
    )
}