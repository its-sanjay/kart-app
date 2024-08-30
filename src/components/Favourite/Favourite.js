import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Favourite = ({favArr}) => {
  const [favList,setFavList]=useState(JSON.parse(localStorage.getItem('e-kart')) || []);
  console.log("favarrrr",favList);
  return (
    <>
      {
        favList.map((item)=>(
          <Card className="text-center" style={{}}>
          <Card.Header>{item.category}</Card.Header>
          <div style={{display: 'flex',alignItems: 'center',padding: '10px',textAlign:'justify'}}>
          <Card.Img variant="top" src={item.image} style={{width:"200px",height:"200px"}}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
             {item.description}
            </Card.Text>
            <Button variant="primary">Add Cart</Button>
          </Card.Body>
          </div>                    
          <Card.Footer className="text-muted" style={{marginBottom:'10px'}}>2 days ago</Card.Footer>
        </Card>
        ))
      }
    </>
  )
}

export default Favourite