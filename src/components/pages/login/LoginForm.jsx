import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
    // state
    const [username, setUserName] = useState("")
    const navigate = useNavigate()

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/order/${username}`)
    }

    const handleChange = (event) => {
        setUserName(event.target.value)
    }
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <p>Connectez vous</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Entrez votre prénom...' onChange={handleChange} value={username} required/>
            <button>Accédez à votre espace</button>
        </form>
    </div>
  )
}
