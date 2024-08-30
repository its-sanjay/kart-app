import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TruncateTitle from './TruncateTitle';
import SearchCategory from '../SearchItem/SearchCategory';
import Spinner from 'react-bootstrap/Spinner';
// import { FaRegHeart } from "react-icons/fa";
// import Favourite from '../Favourite/Favourite';
const Products = ({favArr,setFavArr,setCartCount,cartCount}) => {
    const[product,setProduct]=useState();
    const[search,setSearch]=useState();
    const[spin,setSpin]=useState(false);
    // const[addCartArr,setAddCartArr]=useState([]);
    // const[myProduct,setMyProduct]=useState();
    // const[favArr,setFavArr]=useState([]);
    
    useEffect(()=>{
        console.log("works");
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
            setTimeout(()=>{
                setProduct(res)
                setSearch(res);
                setSpin(true);
            },500);
        }
    );
    },[])
    // console.log("prodct",product);
    const handleSearch=(item)=>{
        if(item === 'all'){
            setSearch(product);
        }else{
            console.log("product",product,item);
            // const res = product.filter((pl)=>pl.category === item);
            const res = product.filter((pl)=>pl.category.toLowerCase().includes(item.toLowerCase()) || pl.title.toLowerCase().includes(item.toLowerCase()));
            console.log("res",res);
            setSearch(res);
        }
    }
    const favItem=(id)=>{
        console.log(id);

        const favItem = product.find((fItem)=>fItem.id === id);

        const isFav = favArr.some((item)=>item.id === id);

        if(!isFav){
            const myArr=[...favArr,{...favItem,fav:true}];
            console.log(myArr);
            setFavArr(myArr);
            localStorage.setItem('e-kart',JSON.stringify(myArr));
        }else{
            console.log("already ---- exists");
            const unFavItem = favArr.filter((item)=>item.id !== id);
            setFavArr(unFavItem);
            localStorage.setItem('e-kart',JSON.stringify(unFavItem));
        }
    }

    const addItem=(add)=>{
        console.log("add",add);
        const addIt=product.find((ad)=>ad.id === add);

        const isAdd=cartCount.some((a)=>a.id === add);

        if(isAdd){
            console.log("already added");
        }else{
            console.log("new add item..");
            const tempAdd=[...cartCount,{...addIt,add:true}];
            console.log("tempAdd",tempAdd);
            setCartCount(tempAdd);
            localStorage.setItem('add-cart',JSON.stringify(tempAdd));
        }
        console.log(addIt);
    }
    return (
    <>
    <h1>Products List</h1>
    <SearchCategory SearchItem={handleSearch}/>

    {spin ?    <Container>
        <Row>
              {search && search.map((item)=>(
                
                <Col key={item.id}  xs={12} sm={6} md={4} lg={3} className="d-flex mb-4 card-ho">
                        <Card style={{ width: '18rem',display:'flex',alignItems:'center' }} >
                            {/* <FaRegHeart style={{}}/> */}
                            <Card.Img variant="top" src={item.image} style={{width:"200px",height:"200px"}}/>
                            <Card.Body style={{display: "flex",flexDirection: "column"}}>
                                {/* <Card.Title>{item.title}</Card.Title> */}
                                <TruncateTitle title={item.title} maxLength={15}/>
                                <Card.Text>
                                    <span>buy</span> <span  style={{color:'red',fontWeight:600}}>{item.price}  /-</span>
                                </Card.Text>
                                <Button variant="outline-dark" style={{marginBottom:"10px"}} onClick={()=>addItem(item.id)}
                                disabled={cartCount.some((i)=>i.id === item.id ? true : '')}    
                                >Add Cart</Button>
                                {/* <Button variant="outline-dark" 
                                
                                onClick={()=>favItem(item.id)}>Fav</Button> */}

                                <Button
                                        variant="outline-dark"
                                        style={{ background: favArr.some((fav) => fav.id === item.id) ? 'red' : '' }}
                                        onClick={() => favItem(item.id)}
                                    >
                                        Fav
                                    </Button>
                            </Card.Body>
                            </Card>
                </Col>
            ))}
        </Row>
    </Container>: <Spinner animation="grow" />}

            {/* <Favourite fav={favArr}/> */}
 
    </>
  )
}

export default Products