import { useEffect, useState } from "react"
const API = process.env.REACT_APP_API_URL

export default function Transactions() {

    const [transactions, setTransactions] = useState({})

    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((res) => res.json())
        .then((response) => {
            setTransactions(response)
            console.log(response)
        })
        .catch((e) => console.log(e))
    }, [])

return (

<>

</>

)
}