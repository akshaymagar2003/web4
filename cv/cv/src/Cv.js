import React from "react"; 
import {Card, 
    CardBody, 
    CardSubtitle, 
    CardText,  
    Button, 
    Container, 
    } from "reactstrap"; 
 
const Cv=({cv})=>{ 
    return( 
        <Card className="text-center"> 
            <CardBody className="text-center"> 
               <CardSubtitle className="fw-bold">My cv</CardSubtitle>  
               <CardText>{cv.id} {cv.fname} {cv.lname} {cv.age}{cv.cgpa}  </CardText> 
                
            <Container className="text-center"> 
                <Button color="danger">Delete</Button> 
                <Button color="warning ml-auto">Update</Button> 
            </Container> 
            </CardBody> 
        </Card> 
    ) 
} 
 
export default Cv;