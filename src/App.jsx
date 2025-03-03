import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/order-success' element={<OrderSuccess/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
