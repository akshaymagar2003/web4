import React, { useState } from "react" 
import Cv from "./Cv" 
 
const Allcv=()=>{ 
    const [cvs,setCv]=useState([ 
        {id:"10",fname:"Manikrao",lname:"Dhore",age:"55",cgpa:"9.4"}, 
        {id:"20",fname:"Mohit",lname:"Bahadure",age:"24",cgpa:"9.6"} 
    ]); 
    return( 
        <div>All CVs 
        <p>List of CVs as follows </p> 
        { 
            cvs.length>0? cvs.map((item)=><Cv cv={item} />): "No CVs available" 
        } 
        </div> 
    ); 
}; 
export default Allcv;