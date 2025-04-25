import { api } from "../axios";
import { jwtDecode } from "jwt-decode"

const SignupPage = () => {

    const handleLogin = async () => {
        try {
            const { data, status } = await api.post("/auth", {
                name: "Pankaj",
                username: "pankaj",
                email: "bGt4n@example.com",
                password: "pankaj123"
            })
            if (status != 201) throw new Error(data.message)
            const decoded = jwtDecode(data.token)
            const exp = decoded.exp * 1000
            const dt = new Date(exp).toUTCString()
            document.cookie = `sample_key=${data.token}; expires=${dt};`
        } catch (err) {
            return console.log(err);
        }
    }

    return <div>
        <button onClick={handleLogin}>Signup</button>
    </div>
}

export default SignupPage