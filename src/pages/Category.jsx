
import axios from "axios";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";

import { useNavigate } from 'react-router-dom'
import { addToCart } from "../redux/slice/CartSlice";

export default function Category(){
    const { category } = useParams()
    const [categorys, setCategorys] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/')
            .then(res => {
                setCategorys(res.data)
            })
        async function getByCategory(){
         const req = await fetch('https://api.escuelajs.co/api/v1/products/');
         const res = await req.json();
         const filter = res.filter((item) => item.category.name === category);
         setCategorys(filter);
        }
        // check if params exits
        if(category){
            getByCategory();
        }
      }, [category]);

    console.log(categorys)

    const handleAddCart = (category) => {

        dispatch(
            addToCart(category)
        )
    }
    return (
        <Layout>
            Kategori Produk {category}
            
            <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
            {categorys.map((category, index) => (
                <div key={index} className="col-span-1 flex flex-col bg-white p-4 rounded-lg">

                    <img src={category.images[0]} alt="" className='rounded-lg h-2/5 md:h-1/3 lg:h-2/6 xl:h-1/2 mb-4 object-cover cursor-pointer' onClick={() => navigate(`/products/${category.id}`)} />
                    <div className='mb-2 cursor-pointer' onClick={() => navigate(`/products/${category.id}`)}>{category.title}</div>
                    <div className="text-xs">{category.description.substring(0, 100) + '...'}</div>
                    <div className="mt-auto text-xs">
                        <div className="mr-2 mb-2">#{category.category.name}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='text-sm font-medium mt-2'>Rp. {category.price}</div>
                        <BsCartPlus size={20} className="text-green-500 cursor-pointer" onClick={() => handleAddCart(category)} />
                    </div>
                    </div>
                ))
                }
            </div>
        </Layout>
        )
}