import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Cart() {
    return (
        <div className="flex items-center">
            <AiOutlineShoppingCart size={25} className="text-green-500" />
        </div>
    )
}
