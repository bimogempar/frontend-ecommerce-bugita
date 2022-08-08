import React from 'react'

export default function Carousel() {
    const imageCarousel = [
        "https://images.unsplash.com/photo-1571597438372-540dd352bf41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    ]
    return (
        <div className="flex overflow-x-scroll hide-scroll-bar rounded-lg">
            <div className="flex flex-nowrap space-x-5">
                {imageCarousel.map((image, index) => (
                    <div className="inline-block" key={index}>
                        <div className="w-72 h-40 max-w-xs overflow-hidden rounded-lg bg-white transition-shadow duration-300 ease-in-out">
                            <img src={image} alt="" className='object-cover' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
