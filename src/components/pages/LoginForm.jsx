import { useState } from "react"

export default function LoginForm() {
    // state
    const [prenom, setPrenom] = useState("")

    // comportement
    const handleClick = () => {
        alert(`Bonjour ${prenom}`)
        setPrenom("")
    }

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <p>Connectez vous</p>
        <form>
            <input type="text" placeholder='Entrez votre prénom...' onChange={handleChange} required/>
            <button onClick={handleClick}>Accédez à votre espace</button>
        </form>
    </div>
  )
}
