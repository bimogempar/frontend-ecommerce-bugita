import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import LayoutAdmin from '../../components/admin/layouts/LayoutAdmin'
import CreateProduct from '../../components/admin/products/modal/CreateProduct'
import TableProducts from '../../components/admin/products/TableProducts'
import * as Yup from 'yup'
import Dropzone from 'react-dropzone'
import Thumb from '../../components/admin/products/modal/Thumb'


const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5
};

export default function AdminProducts() {
    const { authUser } = useSelector(state => state)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState({
        search: '',
    })

    // modal
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}categories`)
            .then(res => {

                const categoriesOptions = res.data.data.map((category) => {
                    return { value: category.id, label: category.name }
                })
                setCategories(categoriesOptions)
            }).catch(err => { return err })

        const arr = []

        if (search.search) {
            arr.push(`search=${search.search}`)
        }

        if (search.search === '') {
            arr.pop()
            arr.push('')
        }

        axios.get(`${process.env.REACT_APP_API_URL}products?${arr.join('&')}`)
            .then(res => {
                setProducts(res.data)
            }).catch(err => { return err })

    }, [search.search])

    const formikProducts = useFormik({
        initialValues: {
            name: '',
            description: '',
            categoryId: null,
            price: 0,
            category: {
                name: ''
            },
            image: []
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name produk harus lebih dari 3 karakter')
                .max(40, 'Nama produk tidak lebih dari 40 karakter')
                .required('Nama produk harus diisi'),
            description: Yup.string()
                .min(3, 'Deskripsi produk harus lebih dari 3 karakter')
                .max(255, 'Deskripsi produk tidak lebih dari 255 karakter')
                .required('Deskripsi produk harus diisi'),
            price: Yup.number().required('Harga produk harus diisi'),
            category: Yup.object().when('categoryId', {
                is: value => value !== null,
                then: Yup.object().shape({
                    name: Yup.string()
                }),
                otherwise: Yup.object().shape({
                    name: Yup.string().required('Nama kategori harus diisi')
                })
            })
        }),
        onSubmit: values => {
            axios.post(`${process.env.REACT_APP_API_URL}addproduct`, values,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + authUser.token
                    }
                }
            ).then(res => {
                console.log('this resp', res.data)
            }).catch(err => {
                return err
            })
        }
    })

    return (
        <LayoutAdmin>
            <h1 className='text-xl mb-1'>Daftar Produk</h1>
            <h6 className=' text-gray-400 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iste?</h6>

            <div className="flex my-4 gap-x-3 justify-between align-items-center">
                <button className="bg-white text-gray-500 p-2 rounded-xl" onClick={() => setIsOpenCreate(true)}>Tambah Produk Baru</button>
                <div className="flex bg-white p-2 w-2/5 xl:w-1/5 space-x-4 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="bg-white w-full outline-none text-gray-500" type="text" placeholder="Pencarian" onKeyUp={e => setSearch({ search: e.target.value })} />
                </div>
            </div>

            <TableProducts setSearch={setSearch} products={products} />
            <CreateProduct setIsOpenCreate={setIsOpenCreate} isOpen={isOpenCreate} buttonRef={buttonRef} title="Tambah Produk" formikProducts={formikProducts} categories={categories} />
        </LayoutAdmin>
    )
}
