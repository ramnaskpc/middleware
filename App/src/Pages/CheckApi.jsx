import { useState } from "react"
import {api} from "../axios"

const CheckApi = () => {
 
    const [data, setData] = useState("")

    const handleApiCall = async () => {
        try {
            const { data } = await api.get(`/api`)
            setData(data.number);
        } catch (error) {
            console.log(error);
            return alert(error.response?.data.message || error.message || "Something went wrong")
        }
    }

    return <div>
        <h1>Check API</h1>
        <button onClick={handleApiCall}>Make API Call</button>
        <div>{data}</div>
    </div>
}

export default CheckApi