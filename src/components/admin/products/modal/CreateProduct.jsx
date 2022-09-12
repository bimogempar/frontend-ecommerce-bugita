import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import ReactSelect from 'react-select';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CurrencyFormat from 'react-currency-format';
import Dropzone, { useDropzone } from 'react-dropzone';
import Thumb from './Thumb';

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5
};

export default function CreateProduct({ setIsOpenCreate, isOpen, buttonRef, formikProducts, title, categories }) {
    console.log('this formik value', formikProducts.values)
    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setIsOpenCreate(false)} initialFocus={buttonRef}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Dialog.Panel>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="relative w-4/5 md:w-1/2 xl:w-1/3 bg-white my-5 rounded-md p-5">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex justify-between">
                                        <h1 className="text-gray-700 font-light text-2xl">{title}</h1>
                                        <button onClick={() => setIsOpenCreate(false)}><AiOutlineCloseCircle /></button>
                                    </div>
                                    <hr />
                                    <p className="text-gray-700 font-light text-md">Tambahkan produk anda dan simpan pada database...</p>
                                    <form className='w-full md:w-full' onSubmit={formikProducts.handleSubmit}>
                                        <div>
                                            <label className="block text-sm text-gray-600  my-2" htmlFor="name">Nama Produk</label>
                                            <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-gray-600 text-sm w-full md:w-2/3" id="name" onChange={formikProducts.handleChange} value={formikProducts.values.name} />
                                            {formikProducts.errors.name ? <label className="block text-sm text-red-600 my-2">{formikProducts.errors.name}</label> : null}
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600  my-2" htmlFor="description">Deskripsi Produk</label>
                                            <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-gray-600 text-sm w-full md:w-2/3" id="description" onChange={formikProducts.handleChange} value={formikProducts.values.description} />
                                            {formikProducts.errors.description ? <label className="block text-sm text-red-600 my-2">{formikProducts.errors.description}</label> : null}
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600  my-2" htmlFor="price">Harga</label>
                                            <span className='border rounded-r-none rounded-lg p-2 text-gray-600 bg-gray-200'>Rp</span>
                                            <CurrencyFormat
                                                onValueChange={
                                                    (values) => {
                                                        const { value } = values;
                                                        formikProducts.setFieldValue('price', parseInt(value))
                                                    }
                                                }
                                                className="border rounded-l-none rounded-lg px-3 py-2 text-gray-600 text-sm w-full md:w-2/3"
                                                name={`price`}
                                                thousandSeparator={true}
                                            />
                                            <div className="text-red-500 text-sm mt-2"></div>
                                            {formikProducts.errors.price ? <label className="block text-sm text-red-600 my-2">{formikProducts.errors.price}</label> : null}
                                        </div>
                                        {
                                            formikProducts.values.categoryId === null ?
                                                <div>
                                                    <label className="block text-sm text-gray-600  my-2" htmlFor="category.name">Kategori Baru</label>
                                                    <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-gray-600 text-sm w-full md:w-2/3" id="category.name" onChange={formikProducts.handleChange} value={formikProducts.values.category.name} />
                                                    {formikProducts.errors.category?.name ? <label className="block text-sm text-red-600 my-2">{formikProducts.errors.category?.name}</label> : null}
                                                </div> : null
                                        }
                                        {
                                            formikProducts.values.category?.name === '' ?
                                                <div>
                                                    <label className="block text-sm text-gray-600 my-2">Atau Pilih Kategori</label>
                                                    <ReactSelect
                                                        className='w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/2'
                                                        placeholder="Pilih Kategori"
                                                        options={categories}
                                                        isClearable={true}
                                                        isSearchable={true}
                                                        onChange={e => {
                                                            formikProducts.setFieldValue('categoryId', e ? e.value : null)
                                                        }}
                                                    />
                                                </div> :
                                                null
                                        }
                                        <div>
                                            <label className="block text-sm text-gray-600  my-2" htmlFor="image">Foto</label>
                                            <UploadComponent setFieldValue={formikProducts.setFieldValue} />
                                            {formikProducts.values.image &&
                                                formikProducts.values.image.map((file, i) => {
                                                    const reader = new FileReader()
                                                    reader.readAsDataURL(file)
                                                    return reader.onloadend = () => {
                                                        <img src={reader.result} alt='' />
                                                    }
                                                })
                                            }
                                            {/* {formikProducts.values.image &&
                                                formikProducts.values.image.map((file, i) => (
                                                    <li key={i}>
                                                        {`File:${file.name} Type:${file.type} Size:${file.size
                                                            } bytes`}{" "}
                                                    </li>
                                                ))
                                            } */}
                                        </div>
                                        <div className="flex justify-end">
                                            <button className='bg-blue-500 text-white p-2 rounded-lg' type='submit'>Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

const UploadComponent = props => {
    const { setFieldValue } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            setFieldValue("image", acceptedFiles);
        }
    });
    return (
        <div className='bg-red-200 w-1/2'>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div>
        </div>
    );
};
