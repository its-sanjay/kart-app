import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Products from '../Products/Products';
// import Col from 'react-bootstrap/Col';
const SearchCategory = ({SearchItem}) => {

    // const[search,setSearch]=useState();
    // const SearchItem=(item)=>{
    //     console.log("product",product,item);
    //     const res = product.filter((pl)=>pl.category === item);
    //     console.log("res",res);
    //     setSearch(res);
    // }
  return (
    <>
    <input type="search" placeholder='select category' onChange={(e)=>SearchItem(e.target.value)}/>
    <Container >
        <Row xs={12} sm={6} className='p-2 d-flex justify-content-center gap-2 mb-3'>
            <Button variant="outline-dark" onClick={()=>SearchItem("all")}>All</Button>
            <Button variant="outline-dark" onClick={()=>SearchItem("jewelery")}>Jwels</Button>
            <Button variant="outline-dark" onClick={()=>SearchItem("men's clothing")}>Mens</Button>
            <Button variant="outline-dark" onClick={()=>SearchItem("electronics")}>Electronics</Button>
            <Button variant="outline-dark" onClick={()=>SearchItem("women's clothing")}>Womens</Button>
            {/* <Products result={search}/> */}
        </Row>
    </Container>
    </>
  )
}

export default SearchCategory