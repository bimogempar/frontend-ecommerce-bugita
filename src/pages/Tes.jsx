
import axios from "axios"
import { useEffect, useState } from "react"
import Layout from "../components/layouts/Layout"

export default function Tes(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/')
            .then(res => {
                setUsers(res.data)
            })
    }, [])
    console.log(users)
    return (
        <Layout>
            {users.map((user, index) => (
                <div>
                    Nama: {user.category.name}
                </div>
            ))}  
        </Layout>
        )
}