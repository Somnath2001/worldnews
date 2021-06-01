import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
   
 } from "reactstrap";


    const  Cards = ({details}) => {   
 
     return(
         <div>
            <Card className="cardd" >
            <CardBody>
                <CardTitle className="text-center mt-1 mb-5"><h1>NEWS FEEDS APPEAR HERE..</h1></CardTitle>
    
                <CardText><h3 className="cardtext">
                {details.title}
                </h3>
                </CardText>
            </CardBody>
     </Card>

         </div>

         
     );
};
 
export default Cards;
