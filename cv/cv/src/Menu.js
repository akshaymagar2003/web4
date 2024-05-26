import React from "react" 
import { Link } from "react-router-dom"; 
import { ListGroup, ListGroupItem } from "reactstrap"; 
 
const Menu=()=>{ 
    return( 
<ListGroup> 
    <Link  
    className="list-group-item list-group-item-action"  
    tag="a"  
    to="/"  
    action> 
        Home 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
     tag="a"  
     to="/add-cv" 
     action> 
        ADD CV 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
    tag="a"  
    to="all-cv"  
    action> 
        ALL CV 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
    tag="a"  
    to="update-cv"  
    action> 
        UPDATE CV  
    </Link> 
    <Link className="list-group-item list-group-item-action"  
     tag="a"  
     to="delete-cv"  
     action> 
        DELETE CV 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
     tag="a"  
     to="search-cv"  
     action> 
        SEARCH CV 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
     tag="a"  
     to="create-views"  
     action> 
        CREATE VIEWS 
    </Link> 
    <Link className="list-group-item list-group-item-action"  
     tag="a"  
     to="contact-us"  
     action> 
        CONTACT US 
    </Link> 
</ListGroup> 
    ) 
} 
 
 export default Menu; 