import React from 'react'

export default function Carousel() {
    return (
        <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap space-x-5">
                <div className="inline-block">
                    <div className="w-72 h-40 max-w-xs overflow-hidden rounded-lg bg-white transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div className="inline-block">
                    <div className="w-72 h-40 max-w-xs overflow-hidden rounded-lg bg-white transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div className="inline-block">
                    <div className="w-72 h-40 max-w-xs overflow-hidden rounded-lg bg-white transition-shadow duration-300 ease-in-out"></div>
                </div>
            </div>
        </div>
    )
}
