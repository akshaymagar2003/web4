
import {Card, 
    CardBody, 
   
    } from "reactstrap"; 
function Header({name,title}) { 
return ( 
<div> 
<Card className="my-2 bg-warning">  
<CardBody> 
<h2 className="text-center my-3">Welcome To React-Node JS n Spring Boot project </h2> 
</CardBody> 
</Card> 
    </div> 
        ); 
 
} 
 
export default Header;