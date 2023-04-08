import React, { useEffect } from 'react'
import Products from './Products'
import "./Home.css"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../../store/actions/productAction'
import Loader from './Loader/Loader'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useAlert} from "react-alert"

// const product = {
//     name: "Head Phones",
//     images: [{url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}],
//     price: "$200",
//     _id: "642934954d6ca7a1c0c77a3d"
// }

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const {products, loading, error} = useSelector((state) => state.products)
  // const 

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProduct())
  },[dispatch, error, alert])
  return (<>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
           <div className='d-flex'> <h1>E</h1><h5 className='comm'>commerce</h5></div>
          </Navbar.Brand>
        </Container>
      </Navbar>
   {loading ? <Loader /> : <>
    <h2 className='text-center'>All Products</h2>
    <div className='container' id='container'>
    {products && products.map((product) => (<Products product={product} />))}
    </div>
  </>}
  </>
  )
}

export default Home