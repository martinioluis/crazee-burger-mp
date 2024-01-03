import { Routes, Route } from 'react-router-dom'
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"
import ErrorPage from "./components/pages/error/ErrorPage"

function App() {
  // affichage
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/order/:username' element={<OrderPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
