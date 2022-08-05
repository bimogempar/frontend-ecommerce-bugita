import React from 'react'
import FruitsCategory from '../../assets/img/category/apple.png'
import VegetablesCategory from '../../assets/img/category/broccoli.png'
import DiaryCategory from '../../assets/img/category/cheese.png'
import MeatCategory from '../../assets/img/category/meat.png'

export default function Categories() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    Categories 😋
                </div>
                <div className='text-sm font-medium text-green-500'>
                    See All
                </div>
            </div>

            <div className="grid grid-cols-4 justify-items-center my-5">
                <div className='text-center'>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
                        <img src={FruitsCategory} alt="" />
                    </div>
                    <div className='mt-4'>Fruit</div>
                </div>
                <div className='text-center'>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
                        <img src={VegetablesCategory} alt="" />
                    </div>
                    <div className='mt-4'>Fruit</div>
                </div>
                <div className='text-center'>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
                        <img src={DiaryCategory} alt="" />
                    </div>
                    <div className='mt-4'>Fruit</div>
                </div>
                <div className='text-center'>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
                        <img src={MeatCategory} alt="" />
                    </div>
                    <div className='mt-4'>Fruit</div>
                </div>
            </div>
        </div>
    )
}
