
import { Form, FormGroup, Input, Button, Container } from "reactstrap"; 
 
const Addcv=()=>{ 
    return<div> 
        <h4 className="text-center my-3">Add New CV Details</h4> 
        <Form> 
            <FormGroup> 
                <label for="GRNo">Roll No</label> 
                <Input  
                type="text"  
                placeholder="Enter GR Number"  
                name="GRNo" 
                id="GRNo" /> 
            </FormGroup> 
            <FormGroup> 
                <label for="FirstName">First Name</label> 
                <Input  
                type="text"  
                placeholder="Enter First Name"  
                name="FirstName" 
                id="FirstName" /> 
            </FormGroup> 
            <FormGroup> 
                <label for="LastName">Last Name</label> 
                <Input  
                type="text"  
                placeholder="EnterLast Name"  
                name="Last Name" 
                id="Last Name" /> 
            </FormGroup> 
            <FormGroup> 
                <label for="Age">Age</label> 
                <Input  
                type="text"  
                placeholder="Enter Age"  
                name="Age" 
                id="Age" /> 
            </FormGroup> 
            <FormGroup> 
                <label for="Cgpa">CGPA</label> 
                <Input  
                type="text"  
                placeholder="Enter CGPA"  
                name="Cgpa" 
                id="Cgpa" /> 
            </FormGroup> 
            <Container className="text-center"> 
            <Button color="success"> Add CV </Button>  
            <Button color="warning ml-2"> Clear </Button> 
            </Container> 
        </Form> 
    </div> 
  
} 
export default Addcv; 